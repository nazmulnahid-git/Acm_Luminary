import { StyleSheet, Text, View, ScrollView, Pressable, ToastAndroid } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { hp, wp } from '@/helpers/common';
import Header from '../../components/Header'
import { theme } from '../../constants/theme';
import Avatar from '../../components/Avatar';
import { useAuth } from '../../contexts/AuthContext';
import RichTextEditor from '../../components/RichTextEditor';
import { useRouter } from 'expo-router';
import { IconDelete, IconGallery, IconVideo } from '../../assets/icons/Icons';
import Button from '../../components/Button';
import * as ImagePicker from 'expo-image-picker';
import { Image } from 'expo-image';
import { Video } from 'expo-av';
import { createOrUpdatePost } from '../../services/PostService';

const NewPostScreen = () => {
  const { user } = useAuth();
  const router = useRouter();
  const bodyRef = useRef('');
  const editorRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);

  const isLocalFile = file => {
    if (!file) return null;
    if (typeof file === 'object') return true;
    return false;
  };

  const getFileType = file => {
    if (!file) return null;
    if (isLocalFile(file)) {
      return file.type;
    }
    if (file.includes('postImage')) return 'image';
    return 'video';
  };

  const getFileUri = file => {
    if (!file) return null;
    if (isLocalFile(file)) {
      return file.uri;
    }
  }

  const onPick = async (isImage) => {
    let ob = {
      mediaTypes: ImagePicker.MediaTypeOptions[isImage ? 'Images' : 'Videos'],
      allowsEditing: true,
      base64: true,
      ...(isImage ? { aspect: [3, 4], quality: 0.7 } : {}),
    }

    try {
      const result = await ImagePicker.launchImageLibraryAsync(ob);
      if (!result.canceled) {
        setFile(result.assets[0]);
      }
    } catch {
      Alert.alert('Error', 'Failed to pick image');
    }
  };
  const handlePost = async () => {
    if (!bodyRef.current && !file) {
      ToastAndroid.show('Please attach a file or write something to post', ToastAndroid.SHORT);
      return;
    }
    setLoading(true);

    const post = {
      body: bodyRef.current,
      file: file,
      user_id: user.id,
    }
    const res = await createOrUpdatePost(post);
    setLoading(false);
    if (res.success) {
      ToastAndroid.show('Post Successfully', ToastAndroid.SHORT);
      router.back();
      return;
    }
    ToastAndroid.show('Post Failed', ToastAndroid.SHORT);
  }
  return (
    <ScreenWrapper bg='white'>
      <View style={styles.container}>


        <Header title="Create Post" />
        <ScrollView contentContainerStyle={{ gap: 20 }}>
          {/* avatar */}
          <View style={styles.header}>
            <Avatar
              uri={user?.profile_img}
              size={hp(6.5)}
              rounded={theme.radius.xl}
            />
            <View style={{ gap: 2 }}>
              <Text style={styles.username}>
                {user && user.name}
              </Text>
              <Text style={styles.publicText}>
                Public
              </Text>
            </View>
          </View>
          <View style={styles.textEditor}>
            <RichTextEditor editorRef={editorRef} onChange={(body) => bodyRef.current = body} />
          </View>
          {file && (
            <View style={styles.file}>
              {getFileType(file) === 'image' ? (
                <Image source={{ uri: getFileUri(file) }} resize='cover' style={{ flex: 1 }} />
              ) : (
                <Video source={{ uri: getFileUri(file) }} useNativeControls isLooping resizeMode='cover' style={{ flex: 1 }} />
              )}
              <Pressable style={styles.closeIcon} onPress={() => setFile(null)}>
                <IconDelete strokeWidth={1.5} height={20} width={20} color={'white'} />
              </Pressable>
            </View>
          )}
          <View style={styles.media}>
            <Text style={styles.addImageText}>Add to your post</Text>
            <View style={styles.mediaIcons}>
              <Pressable onPress={() => onPick(true)}>
                <IconGallery strokeWidth={1.5} height={25} width={25} color={theme.colors.text} />
              </Pressable>
              <Pressable onPress={() => onPick(false)}>
                <IconVideo strokeWidth={1.5} height={27} width={27} color={theme.colors.text} />
              </Pressable>
            </View>
          </View>
        </ScrollView>
        <Button
          title={"Post"} onPress={handlePost} loading={loading}
        />
      </View>
    </ScreenWrapper>
  )
}

export default NewPostScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
    paddingHorizontal: wp(4),
    gap: 15,
  },
  title: {
    marginBottom: 10,
    fontSize: hp(2.5),
    fontWeight: theme.fonts.semibold,
    color: theme.colors.text,
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  username: {
    fontSize: hp(2.2),
    fontWeight: theme.fonts.semibold,
    color: theme.colors.text,
  },
  avatar: {
    height: hp(6.5),
    width: hp(6.5),
    borderRadius: theme.radius.xl,
    borderCurve: 'continuous',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  publicText: {
    fontSize: hp(1.7),
    fontWeight: theme.fonts.medium,
    color: theme.colors.textLight,
  },
  textEditor: {
    // marginTop: 10,
  },
  media: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1.5,
    padding: 12,
    paddingHorizontal: 18,
    borderRadius: theme.radius.xl,
    borderCurve: 'continuous',
    borderColor: theme.colors.darkLight,
  },
  mediaIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  addImageText: {
    fontSize: hp(1.9),
    fontWeight: theme.fonts.semibold,
    color: theme.colors.text,
  },
  imageIcon: {
    backgroundColor: theme.colors.darkLight,
    borderRadius: theme.radius.md,
    padding: 6,
  },
  file: {
    height: hp(30),
    width: '100%',
    borderRadius: theme.radius.xl,
    overflow: 'hidden',
    borderCurve: 'continuous',
  },
  video: {},
  closeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 7,
    borderRadius: 50,
    backgroundColor: 'rgba(255,0,0,0.6)',
    // shadowColor: theme.colors.textLight,
    // shadowOffset: { width: 0, height: 3 },
    // shadowOpacity: 0.6,
    // shadowRadius: 8,
  },
})