import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, Alert, Text, Pressable } from 'react-native';
import { supabase } from '../../lib/supabase';
import { hp, wp } from '@/helpers/common';
import { router, useRouter } from 'expo-router';
import ScreenWrapper from '../../components/ScreenWrapper';
import { theme } from '../../constants/theme';
import { useAuth } from '../../contexts/AuthContext';
import Header from '../../components/Header';
import { IconEdit, IconEmail, IconLocation, IconLogout, IconPhone } from '../../assets/icons/Icons';
import Avatar from '../../components/Avatar';
import { getUserImageSource } from '../../services/ImageService';

const ProfileScreen = () => {
  const { user, setAuth } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Logout',
        onPress: async () => {
          setLoading(true);
          const { error } = await supabase.auth.signOut();
          if (error) {
            Alert.alert('Error', error.message);
          } else {
            router.replace('/welcome');
            setLoading(false);
          }
        }
      }
    ])
  };


  return (
    <ScreenWrapper bg="white">
      <UserHeader user={user} router={router} handleLogout={handleLogout} />
    </ScreenWrapper>
  );
};


const UserHeader = ({ user, router, handleLogout }) => {

  return (
    <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: wp(4) }}>
      <View>
        <Header title={'Profile'} mb={30} />
        <Pressable onPress={handleLogout} style={styles.logoutButton}>
          <IconLogout strokeWidth={1.6} height={hp(3.5)} width={hp(3.5)} color={theme.colors.text} />
        </Pressable>
      </View>
      <View style={styles.container}>
        <View style={{ gap: 15 }}>
          <View style={styles.avatarContainer}>
            <Avatar
              uri={getUserImageSource(user?.profile_img)}
              size={hp(12)}
              rounded={theme.radius.xxl * 1.4}
            />
            <Pressable onPress={() => { router.push('editProfile') }} style={styles.editIcon}>
              <IconEdit strokeWidth={1.5} height={20} width={20} />
            </Pressable>
          </View>
          <View style={{ alignItems: 'center', gap: 4 }}>
            <Text style={styles.userName}>{user?.name}</Text>
            <Text style={styles.infoText}>{user?.bio}</Text>
          </View>

          <View style={{ gap: 10 }}>
            {user && user.phone_no && (
              <View style={styles.info}>
                <IconPhone strokeWidth={1} height={20} width={20} color={theme.colors.text} />
                <Text style={styles.infoText}>{user.phone_no}</Text>
              </View>
            )}
            {user?.email && (
              <View style={styles.info}>
                <IconEmail strokeWidth={1} height={20} width={20} color={theme.colors.text} />
                <Text style={styles.infoText}>{user?.email}</Text>
              </View>
            )}
            {user?.address && (
              <View style={styles.info}>
                <IconLocation strokeWidth={1} height={20} width={20} color={theme.colors.text} />
                <Text style={styles.infoText}>{user?.address}</Text>
              </View>
            )}
          </View>
        </View>

      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    marginHorizontal: wp(4),
    marginBottom: 20,
  },
  headerShape: {
    height: hp(4),
    width: wp(100),
  },
  avatarContainer: {
    height: hp(12),
    width: hp(12),
    alignSelf: 'center',
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: -12,
    padding: 7,
    borderRadius: 50,
    backgroundColor: 'white',
    shadowColor: theme.colors.textLight,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 7,
  },
  userName: {
    fontSize: hp(3),
    fontWeight: '500',
    color: theme.colors.textDark,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  infoText: {
    fontSize: hp(1.6),
    fontWeight: '500',
    color: theme.colors.textLight,
  },
  logoutButton: {
    position: 'absolute',
    right: 0,
    padding: 5,
    borderRadius: theme.radius.sm,
    backgroundColor: '#fee2e2',
  },
  listStyle: {
    paddingHorizontal: wp(4),
    paddingBottom: 30,
  },
  noPosts: {
    fontSize: hp(2),
    textAlign: 'center',
    color: theme.colors.text,
  },

});

export default ProfileScreen;


