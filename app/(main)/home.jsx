import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, Alert } from 'react-native';
import Button from '../../components/Button';
import { supabase } from '../../lib/supabase';
import { hp, wp } from '@/helpers/common';
import { useRouter } from 'expo-router';
import ScreenWrapper from '../../components/ScreenWrapper';
import { theme } from '../../constants/theme';

const Home = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const onSubmit = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert('Error', error.message);
    } else {
      router.replace('/welcome');
      setLoading(false);
    }
  };

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Button
          title="Logout"
          buttonStyle={styles.logoutButton}
          onPress={onSubmit}
          loading={loading}
        />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(5),
  },
  logoutButton: {
    backgroundColor: theme.colors.danger,
    width: wp(60),
    height: hp(7),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});

export default Home;


