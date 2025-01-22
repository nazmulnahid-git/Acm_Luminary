import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { theme } from '../../constants/theme'
import { hp, wp } from '@/helpers/common';
import { IconNotification, IconPlus, IconProfile } from '../../assets/icons/Icons';
import { router } from 'expo-router';
import Avatar from '../../components/Avatar';
import { useAuth } from '../../contexts/AuthContext';
import { getUserImageSource } from '../../services/ImageService';


const HomeScreen = () => {
  const { user } = useAuth();
  console.log(user);
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
  }
})