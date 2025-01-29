import { View, Text, StyleSheet, Pressable, ToastAndroid, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { theme } from '../../constants/theme'
import { hp, wp } from '@/helpers/common';
import { IconNotification, IconPlus, IconProfile } from '../../assets/icons/Icons';
import { router } from 'expo-router';
import Avatar from '../../components/Avatar';
import { useAuth } from '../../contexts/AuthContext';
import { getUserImageSource } from '../../services/ImageService';
import { getPost } from '../../services/PostService';
import PostCard from '../../components/PostCard';
import Loading from '../../components/Loading';
import { supabase } from '../../lib/supabase';

let limit = 0;
const HomeScreen = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const handlePostEvent = async (payload) => {
    console.log(payload);
    if (payload.eventType == 'INSERT' && payload.new?.id) {
      let newPost = { ...payload.new };
      let res = await getUserData(newPost.userId);
      newPost.user = res.success ? res.data : {};
      setPosts(prevPosts => [newPost, ...prevPosts]);
    }
  }
  useEffect(() => {
    // fetchPosts();
    const postChannel = supabase
      .channel('posts')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'posts' }, handlePostEvent)
      .subscribe();


    return () => {
      supabase.removeChannel(postChannel);
    };
  }, [])

  const fetchPosts = async () => {
    limit = limit + 10;
    if (!hasMore) return null;
    const res = await getPost(limit);
    if (res.success) {
      setPosts(res.data);
      if (res.data.length === posts.length) {
        setHasMore(false);
      }
      console.log(res.data);
    } else {
      ToastAndroid.show('Could not load posts!', ToastAndroid.SHORT);
    }
  };

  return (
    <ScreenWrapper bg="white">
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>ACM Luminary</Text>
          <View style={styles.icons}>
            <Pressable onPress={() => router.push('notifications')}>
              <IconNotification strokeWidth={1.6} height={hp(3.5)} width={hp(3.5)} color={theme.colors.text} />
            </Pressable>
            <Pressable onPress={() => router.push('newPost')}>
              <IconPlus strokeWidth={1.6} height={hp(3.5)} width={hp(3.5)} color={theme.colors.text} />
            </Pressable>
            <Pressable onPress={() => router.push('profile')}>
              <Avatar
                uri={getUserImageSource(user?.profile_img)}
                size={hp(4)}
                rounded={theme.radius.sm}
                styles={
                  {
                    borderWidth: 1.5,
                    borderColor: theme.colors.gray,
                  }
                }
              />
            </Pressable>
          </View>
        </View>
        <FlatList
          data={posts}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listStyle}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PostCard
              item={item}
              currentUser={user}
              router={router}
              shadow={true}
            />
          )}
          onEndReached={() => { fetchPosts() }}
          onEndReachedThreshold={0}
          ListFooterComponent={
            hasMore ?
              <View style={{ marginVertical: posts.length ? 30 : 200 }}>
                <Loading />
              </View> :
              <View style={{ marginVertical: 10 }}>
                <Text style={styles.noPosts}>No More Posts</Text>
              </View>
          }
        />
      </View>
    </ScreenWrapper>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: wp(4),
  },
  title: {
    color: theme.colors.text,
    fontWeight: theme.fonts.bold,
    fontSize: hp(3.2),

  },
  avatarImage: {
    height: hp(4.3),
    width: hp(4.3),
    borderRadius: theme.radius.sm,
    borderCurve: 'continuous',
    borderWidth: 3,
    borderColor: theme.colors.gray,

  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 18,
  },
  listStyle: {
    paddingTop: 20,
    paddingHorizontal: wp(4),
  },
  noPosts: {
    fontSize: hp(2),
    color: theme.colors.text,
    textAlign: 'center',
  }
})