import { Text, Pressable, View, StyleSheet, StatusBar, Alert } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import ScreenWrapper from '../../components/ScreenWrapper';
import { hp, wp } from '@/helpers/common';
import { IconEmail, IconPassword } from '../../assets/icons/Icons';
import { theme } from '../../constants/theme';
import BackButton from '../../components/BackButton';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { supabase } from '../../lib/supabase';

const { colors } = theme;

const SignupScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    router.replace('/signIn');
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onSubmit = async () => {
    setLoading(true);

    if (!email || !password || !confirmPassword) {
      Alert.alert('Please', 'Fill all the fields to signup');
      setLoading(false);
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address');
      setLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Password Mismatch', 'Both passwords should be same');
      setLoading(false);
      return;
    }

    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      Alert.alert('Failed', error.message);
    }
    // else {
    //   Alert.alert('Success', 'Check your email to complete the signup process!');
    // }
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
            onChangeText={setEmail}
            keyboardType="email-address"
            value={email}
          />
          <Input
            icon={<IconPassword strokeWidth={1.6} height={26} width={26} color={colors.gray} />}
            placeholder="Enter Your Password"
            placeholderTextColor={colors.gray}
            onChangeText={setPassword}
            secureTextEntry
            value={password}
          />
          <Input
            icon={<IconPassword strokeWidth={1.6} height={26} width={26} color={colors.gray} />}
            placeholder="Confirm Your Password"
            placeholderTextColor={colors.gray}
            onChangeText={setConfirmPassword}
            secureTextEntry
            value={confirmPassword}
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