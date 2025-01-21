import Input from '../../components/Input';
import Header from '../../components/Header';
import Button from '../../components/Button';
import React, { useEffect, useState } from 'react';
import ScreenWrapper from '@/components/ScreenWrapper';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { hp, wp } from '@/helpers/common';
import { theme } from '../../constants/theme';
import { cloudinary } from '../../lib/cloudinary';
import { useAuth } from '../../contexts/AuthContext';
import { updateUserData } from '../../services/UserService';
import { getUserImageSource } from '../../services/ImageService';
import { Alert, Pressable, ScrollView, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import { IconCamera, IconLocation, IconPhone, IconProfile, IconEmail } from '../../assets/icons/Icons';
import * as ImagePicker from 'expo-image-picker';

// Utility function for validation
const validateProfile = (user) => {
  if (!user.name) return 'Name is required!';
  if (!user.email) return 'Email is required!';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(user.email)) return 'Please enter a valid email address!';
  return null;
};

// Avatar component
const Avatar = ({ imageSource, onPickImage }) => (
  <View style={styles.avatarContainer}>
    <Image source={imageSource} style={styles.avatar} />
    <Pressable style={styles.cameraIcon} onPress={onPickImage}>
      <IconCamera strokeWidth={1.5} height={20} width={20} />
    </Pressable>
  </View>
);

const EditProfileScreen = () => {
  const router = useRouter();
  const { user: currentUser, setUserData } = useAuth();
  const [user, setUser] = useState({
    name: '',
    profile_img: null,
    bio: '',
    phone_no: '',
    email: '',
    address: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setUser({
      name: currentUser.name || '',
      profile_img: currentUser.profile_img || null,
      bio: currentUser.bio || '',
      phone_no: currentUser.phone_no || '',
      email: currentUser.email || '',
      address: currentUser.address || '',
    });
  }, [currentUser]);

  const handleUpdate = async () => {
    const errorMessage = validateProfile(user);
    if (errorMessage) {
      ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
      return;
    }

    try {
      setLoading(true);
      const updatedUser = { ...user };

      // Upload profile image
      if (user.profile_img && typeof user.profile_img === 'object') {
        const imageUrl = await cloudinary.uploadImage(user.profile_img.base64);
        if (!imageUrl) throw new Error('Image upload failed');
        updatedUser.profile_img = imageUrl;
      }

      const res = await updateUserData(currentUser.id, updatedUser);
      if (!res.success) throw new Error('Update failed');

      setUserData({ ...currentUser, ...updatedUser });
      ToastAndroid.show('Profile Updated Successfully', ToastAndroid.SHORT);
      router.back();
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  };

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

  const imageSource =
    user.profile_img && typeof user.profile_img === 'object'
      ? user.profile_img.uri
      : getUserImageSource(currentUser?.profile_img);

  return (
    <ScreenWrapper bg="white">
      <View style={styles.container}>
        <ScrollView>
          <Header title="Edit Profile" />

          <View style={styles.form}>
            <Avatar imageSource={imageSource} onPickImage={onPickImage} />

            <Text style={styles.instructionText}>Please fill your profile details</Text>

            <Input
              icon={<IconProfile strokeWidth={1.6} height={25} width={25} color={theme.colors.gray} />}
              placeholder="Enter your name"
              placeholderTextColor={theme.colors.gray}
              value={user.name}
              onChangeText={(value) => setUser({ ...user, name: value })}
            />

            <Input
              icon={<IconEmail strokeWidth={1.6} height={25} width={25} color={theme.colors.gray} />}
              placeholder="Enter your email"
              keyboardType="email-address"
              placeholderTextColor={theme.colors.gray}
              value={user.email}
              onChangeText={(value) => setUser({ ...user, email: value })}
            />

            <Input
              icon={<IconPhone strokeWidth={1.6} height={25} width={25} color={theme.colors.gray} />}
              placeholder="Enter your phone number"
              placeholderTextColor={theme.colors.gray}
              value={user.phone_no}
              onChangeText={(value) => setUser({ ...user, phone_no: value })}
            />

            <Input
              icon={<IconLocation strokeWidth={1.6} height={25} width={25} color={theme.colors.gray} />}
              placeholder="Enter your address"
              placeholderTextColor={theme.colors.gray}
              value={user.address}
              onChangeText={(value) => setUser({ ...user, address: value })}
            />

            <Input
              multiline
              containerStyle={styles.bio}
              placeholder="Bio.."
              placeholderTextColor={theme.colors.gray}
              value={user.bio}
              onChangeText={(value) => setUser({ ...user, bio: value })}
            />

            <Button title="Update" loading={loading} onPress={handleUpdate} />
          </View>
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(4),
  },
  avatarContainer: {
    height: hp(14),
    width: hp(14),
    alignSelf: 'center',
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: theme.radius.xxl * 1.8,
    borderWidth: 1,
    borderColor: theme.colors.darkLight,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: -10,
    padding: 8,
    borderRadius: 50,
    backgroundColor: 'white',
    shadowColor: theme.colors.textLight,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 7,
  },
  form: {
    gap: 18,
    marginTop: 20,
  },
  instructionText: {
    fontSize: hp(1.5),
    color: theme.colors.text,
  },
  bio: {
    flexDirection: 'row',
    height: hp(15),
    alignItems: 'flex-start',
    paddingVertical: 15,
  },
});
