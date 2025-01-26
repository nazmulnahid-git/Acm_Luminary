import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { hp, wp } from '@/helpers/common';
import Header from '../../components/Header'
import { theme } from '../../constants/theme';
import Avatar from '../../components/Avatar';
import { useAuth } from '../../contexts/AuthContext';
import RichTextEditor from '../../components/RichTextEditor';
import { useRouter } from 'expo-router';
import { IconGallery, IconVideo } from '../../assets/icons/Icons';
import Button from '../../components/Button';
import * as ImagePicker from 'expo-image-picker';

const NewPostScreen = () => {
  const { user } = useAuth();
  const router = useRouter();
  const bodyRef = useRef('');
  const editorRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState([]);
  const onPickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        base64: true,
        aspect: [1, 1],
        quality: 0.7,
      });

      if (!result.canceled) {
        setUser({ ...user, profile_img: result.assets[0] });
      }
    } catch {
      Alert.alert('Error', 'Failed to pick image');
    }
  };
  const handlePost = async () => {
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
          <View style={styles.media}>
            <Text style={styles.addImageText}>Add to your post</Text>
            <View style={styles.mediaIcons}>
              <Pressable onPress={pickImage}>
                <IconGallery sstrokeWidth={1.5} height={25} width={25} color={theme.colors.text} />
              </Pressable>
              <Pressable onPress={onPickImage}>
                <IconVideo sstrokeWidth={1.5} height={27} width={27} color={theme.colors.text} />
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
    // shadowColor: theme.colors.textLight,
    // shadowOffset: { width: 0, height: 3 },
    // shadowOpacity: 0.6,
    // shadowRadius: 8,
  },
})