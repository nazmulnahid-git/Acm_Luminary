import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { theme } from '../constants/theme'
import { hp, wp } from '@/helpers/common';
import Avatar from './Avatar';
import { IconComment, IconHeart, IconMenu, IconShare } from '../assets/icons/Icons';
import RenderHtml from 'react-native-render-html';
import { Image } from 'expo-image';
import { Video } from 'expo-av';
import { likePost, removeLike } from '../services/PostService';

const PostCard = ({
  item,
  currentUser,
  router,
  shadow,
}) => {
  const hasShadow = shadow ? shadow : true;
  const textStyle = {
    color: theme.colors.dark,
    fontSize: hp(1.75),
  };

  const tagsStyles = {
    div: textStyle,
    p: textStyle,
    ol: textStyle,
    h1: {
      color: theme.colors.dark,
    },
    h4: {
      color: theme.colors.dark,
    },
  };
  const shadowStyles = {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 5,
  };
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    setLikes(item.postLike);
  }, []);

  const createdAt = moment(item.created_at).format('MMM D');

  const openPostDetails = () => {
  }

  console.log(currentUser.id);

  const onLike = async () => {
    if (liked) {
      const res = await removeLike(item.id, currentUser.id);
      if (!res.success) {
        ToastAndroid.show('Something went wrong!', ToastAndroid.SHORT);
        return;
      }
      setLikes(likes.filter(like => like.user_id != currentUser.id));
      return;
    }
    let data = {
      post_id: item.id,
      user_id: currentUser.id,
    };
    setLikes([...likes, data]);
    const res = await likePost(data);
    if (!res.success) {
      ToastAndroid.show('Something went wrong!', ToastAndroid.SHORT);
      return;
    }
  }

  const fileType = item.file && item.file.includes('image/upload') ? 'image' : 'video';
  const liked = likes.filter(like => like.user_id == item.users.id).length > 0 ? true : false;
  console.log(likes);

  return (
    <View style={[styles.container, hasShadow && shadowStyles]}>
      <View style={styles.header}>
        {/* user info and post time */}
        <View style={styles.userInfo}>
          <Avatar
            size={hp(4.5)}
            uri={item?.users?.profile_img}
            rounded={theme.radius.md}
          />
          <View style={{ gap: 2 }}>
            <Text style={styles.username}>{item?.users?.name}</Text>
            <Text style={styles.postTime}>{createdAt}</Text>
          </View>
        </View>
        <Pressable onPress={openPostDetails}>
          <IconMenu strokeWidth={1.6} height={hp(3.5)} width={hp(3.5)} color={theme.colors.text} />
        </Pressable>
      </View>
      <View style={styles.content}>
        <View style={styles.postBody}>
          <Text>
            {item?.body && (
              <RenderHtml
                contentWidth={wp(100)}
                source={{ html: item.body }}
                tagsStyles={tagsStyles}
              />
            )}
          </Text>
          {
            item?.file && fileType === 'image' && (
              <Image
                source={{ uri: item.file }}
                style={styles.postMedia}
                contentFit="cover"
                transition={100}
              />
            )
          }
          {
            item?.file && fileType === 'video' && (
              <Video
                source={{ uri: item.file }}
                style={[styles.postMedia, { height: hp(30) }]}
                useNativeControls
                isLooping
                resizeMode="cover"
              />
            )
          }
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerButton}>
          <Pressable onPress={onLike}>
            <IconHeart
              strokeWidth={1.6}
              height={hp(3.5)}
              width={hp(3.5)}
              color={theme.colors.roseLight}
              fill={liked ? theme.colors.roseLight : 'none'}
            />
          </Pressable>
          <Text style={styles.count}>
            {likes?.length}
          </Text>
        </View>
        {/* <View style={styles.footerButton}>
          <Pressable onPress={() => console.log("Comment button pressed")}>
            <IconComment
              strokeWidth={1.6}
              height={hp(3.5)}
              width={hp(3.5)}
              color={theme.colors.text}
            />
          </Pressable>
        </View> */}

        {/* <View style={styles.footerButton}>
          <Pressable onPress={() => console.log("Share button pressed")}>
            <IconShare
              strokeWidth={1.6}
              height={hp(3.5)}
              width={hp(3.5)}
              color={theme.colors.text}
            />
          </Pressable>
        </View> */}

      </View>


    </View>
  );
}

export default PostCard

const styles = StyleSheet.create({
  container: {
    gap: 10,
    marginBottom: 15,
    borderRadius: theme.radius.xl + 1.1,
    borderCurve: 'continuous',
    padding: 10,
    paddingVertical: 12,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: theme.colors.gray,
    shadowColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  username: {
    fontSize: hp(1.7),
    color: theme.colors.textDark,
    fontWeight: theme.fonts.medium,
  },
  postTime: {
    fontSize: hp(1.4),
    color: theme.colors.textLight,
    fontWeight: theme.fonts.medium,
  },
  content: {
    gap: 10,
    // marginBottom: 10, // Uncomment if needed
  },
  postMedia: {
    height: hp(40),
    width: '100%',
    borderRadius: theme.radius.xl,
    borderCurve: 'continuous',
  },
  postBody: {
    marginLeft: 5,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  footerButton: {
    marginLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ac: { // Corrected property name
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },
  count: {
    color: theme.colors.text,
    fontSize: hp(2),
  },
});