import { Text, Pressable, View, StyleSheet, StatusBar, Alert } from 'react-native';
import React, { useRef, useState } from 'react';
import { useRouter } from 'expo-router';
import ScreenWrapper from '../components/ScreenWrapper';
import { hp, wp } from '@/helpers/common';
import { IconEmail, IconPassword } from '../assets/icons/Icons';
import { theme } from '../constants/theme';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import Input from '../components/Input';
import { supabase } from '../lib/supabase';

const { colors } = theme;

const SignupScreen = () => {
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    router.replace('/signIn');
  };

  const onSubmit = async () => {
    setLoading(true);
    const email = emailRef.current.trim();
    const password = passwordRef.current.trim();
    const confirmPassword = confirmPasswordRef.current.trim();
    if (!email || !password || !confirmPassword) {
      Alert.alert('Please fill all the fields');
      setLoading(false);
      return;
    } else if (password !== confirmPassword) {
      Alert.alert('Both passwords should be same');
      setLoading(false);
      return;
    }
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (error) Alert.alert(error.message);
    setLoading(false);
  };

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <BackButton height={40} width={40} />
        <View>
          <Text style={styles.welcomeText}>Let's</Text>
          <Text style={styles.welcomeText}>Get Started</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.instructionText}>Please sign up to continue ...</Text>
          <Input
            icon={<IconEmail strokeWidth={1.6} height={25} width={25} color={colors.gray} />}
            placeholder="Enter Your Email"
            placeholderTextColor={colors.gray}
            onChangeText={(value) => emailRef.current = value}
            keyboardType="email-address"
          />
          <Input
            icon={<IconPassword strokeWidth={1.6} height={26} width={26} color={colors.gray} />}
            placeholder="Enter Your Password"
            placeholderTextColor={colors.gray}
            onChangeText={(value) => passwordRef.current = value}
            secureTextEntry
          />
          <Input
            icon={<IconPassword strokeWidth={1.6} height={26} width={26} color={colors.gray} />}
            placeholder="Confirm Your Password"
            placeholderTextColor={colors.gray}
            onChangeText={(value) => confirmPasswordRef.current = value}
            secureTextEntry
          />
          <Button title="Sign Up" buttonStyle={styles.signupButton} onPress={onSubmit} loading={loading} />
          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account?</Text>
            <Pressable onPress={handleLogin}>
              <Text style={styles.loginLink}>Log in</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(5),
    gap: 45,
  },
  welcomeText: {
    fontSize: hp(5),
    color: colors.textDark,
    fontWeight: theme.fonts.bold,
  },
  form: {
    gap: 25,
  },
  instructionText: {
    fontSize: hp(2),
    color: colors.text,
  },
  signupButton: {
    marginHorizontal: wp(3),
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  footerText: {
    color: colors.text,
    fontSize: hp(2),
  },
  loginLink: {
    color: colors.primary,
    fontWeight: theme.fonts.semibold,
  },
});

export default SignupScreen;