import { Text, Pressable, View, StyleSheet, StatusBar } from 'react-native';
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

const LoginScreen = () => {
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSignup = () => {
    router.replace('/signUp');
  };

  const onSubmit = async () => {
    const email = emailRef.current.trim();
    const password = passwordRef.current.trim();
    setLoading(true);
    const { data: { session }, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    setLoading(false);
  };

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <BackButton height={40} width={40} />
        <View>
          <Text style={styles.welcomeText}>Hey,</Text>
          <Text style={styles.welcomeText}>Welcome Back</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.instructionText}>Please log in to continue ...</Text>
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
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
          <Button title="Login" buttonStyle={styles.loginButton} onPress={onSubmit} loading={loading} />
          <View style={styles.footer}>
            <Text style={styles.footerText}>Don't have an account?</Text>
            <Pressable onPress={handleSignup}>
              <Text style={styles.signupLink}>Sign up</Text>
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
  forgotPassword: {
    textAlign: 'right',
    color: colors.primary,
    fontWeight: theme.fonts.semibold,
  },
  loginButton: {
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
  signupLink: {
    color: colors.primary,
    fontWeight: theme.fonts.semibold,
  },
});

export default LoginScreen;