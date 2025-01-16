import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { hp, wp } from '@/helpers/common';
import { theme } from '../../constants/theme';
import Header from '../../components/Header';
import { Image } from 'expo-image';
import { getUserImageSource } from '../../services/ImageService';
import { useAuth } from '../../contexts/AuthContext';
import { IconCamera, IconLocation, IconPhone, IconProfile } from '../../assets/icons/Icons';
import Input from '../../components/Input';
import Button from '../../components/Button'

const EditProfileScreen = () => {
  const { user: currentUser } = useAuth();
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(false);
  const update = () => {

  }
  useEffect(() => {
    setUser({
      name: currentUser.name || '',
      profile_img: currentUser.profile_img || null,
      bio: currentUser.bio || '',
      phone_no: currentUser.phone_no || '',
      address: currentUser.address || '',
    })
  }, [currentUser])
  const ImageSource = getUserImageSource(currentUser?.profile_img);
  const onPickImage = async () => {

  }
  return (
    <ScreenWrapper bg="white">
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <Header title="Edit Profile" />

          {/* form */}
          <View style={styles.form}>
            <View style={styles.avatarContainer}>
              <Image source={ImageSource} style={styles.avatar} />
              <Pressable style={styles.cameraIcon} onPress={onPickImage}>
                <IconCamera strokeWidth={1.5} height={20} width={20} />
              </Pressable>
            </View>
            <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
              Please fill your profile details
            </Text>
            <Input
              icon={<IconProfile strokeWidth={1.6} height={25} width={25} color={theme.colors.gray} />}
              placeholder="Enter your name"
              placeholderTextColor={theme.colors.gray}
              value={user.name}
              onChangeText={value => setUser({ ...user, name: value })}
            />
            <Input
              icon={<IconPhone strokeWidth={1.6} height={25} width={25} color={theme.colors.gray} />}
              placeholder="Enter your phone number"
              placeholderTextColor={theme.colors.gray}
              value={user.phone_no}
              onChangeText={value => setUser({ ...user, phone_no: value })}
            />
            <Input
              icon={<IconLocation strokeWidth={1.6} height={25} width={25} color={theme.colors.gray} />}
              placeholder="Enter your address"
              placeholderTextColor={theme.colors.gray}
              value={user.address}
              onChangeText={value => setUser({ ...user, address: value })}
            />
            <Input
              multiline={true}
              containerStyle={styles.bio}
              placeholder="Bio.."
              placeholderTextColor={theme.colors.gray}
              value={user.bio}
              onChangeText={value => setUser({ ...user, bio: value })}
            />
            <Button title={'Update'} loading={loading} onPress={update} />
          </View>
        </ScrollView>
      </View>
    </ScreenWrapper>
  )
}

export default EditProfileScreen

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
    borderCurve: 'continuous',
    borderWidth: 1,
    borderColor: theme.colors.darkLight,
  },
  bio: {
    flexDirection: 'row',
    height: hp(15),
    alignItems: 'flex-start',
    paddingVertical: 15,
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
  input: {
    flexDirection: 'row',
    borderWidth: 0.4,
    borderColor: theme.colors.text,
    borderRadius: theme.radius.xxl,
    borderCurve: 'continuous',
    padding: 17,
    paddingHorizontal: 20,
    gap: 15,
  },
})