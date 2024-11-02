import { Image, Text, Pressable, View, StyleSheet, TextInput, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import ScreenWrapper from '@/components/ScreenWrapper';
import { FontAwesome6 } from '@expo/vector-icons';
import { IconEmail, IconPassword } from '../assets/icons/Icons'
import { theme } from '@/constants/theme';
import BackButton from '../components/BackButton';
const { colors } = theme;

const LoginScreen = () => {
  const router = useRouter();
  const [secureEntry, setSecureEntry] = useState(true);

  const handleSignup = () => {
    router.replace('/signup');
  };

  return (
    <ScreenWrapper>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <BackButton height={40} width={40} />
        <View style={styles.contentWrapper}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Hey,</Text>
            <Text style={styles.headerText}>Welcome</Text>
            <Text style={styles.headerText}>Back</Text>
          </View>
          {/* Form */}
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <IconEmail style={styles.inputIcon} height={25} width={25} color={colors.gray} />

              <TextInput
                style={styles.input}
                placeholder="Enter Your Email"
                placeholderTextColor={colors.gray}
                keyboardType="email-address"
              />
            </View>
            <View style={styles.inputContainer}>
              <IconPassword style={styles.inputIcon} height={25} width={25} color={colors.gray} />
              <TextInput
                style={styles.input}
                placeholder="Enter Your Password"
                placeholderTextColor={colors.gray}
                secureTextEntry={secureEntry}
              />
              <Pressable onPress={() => setSecureEntry((prev) => !prev)}>
                <FontAwesome6
                  style={styles.inputIcon}
                  name={secureEntry ? 'eye' : 'eye-slash'}
                  size={15}
                  color={colors.gray}
                />
              </Pressable>
            </View>
            <Pressable>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </Pressable>
            <Pressable style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
            </Pressable>
            <Text style={styles.dividerText}>or continue with</Text>
            <Pressable style={styles.googleButton}>
              <Image
                source={require('../assets/images/google.png')}
                style={styles.googleIcon}
              />
              <Text style={styles.googleButtonText}>Google</Text>
            </Pressable>
            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Don't have an account?</Text>
              <Pressable onPress={handleSignup}>
                <Text style={styles.signupLink}>Sign up</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
  },
  contentWrapper: {
    paddingVertical: 20,
  },
  headerContainer: {
    marginVertical: 20,
  },
  headerText: {
    fontSize: 36,
    color: colors.textDark,
    fontWeight: '600',
  },
  formContainer: {
    marginTop: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.primary,
    height: 60,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    marginVertical: 8,
  },
  inputIcon: {
    margin: 8,
  },
  input: {
    flex: 1,
    padding: 4,
  },
  forgotPassword: {
    textAlign: 'right',
    color: colors.textDark,
    fontWeight: '600',
    marginVertical: 8,
  },
  loginButton: {
    backgroundColor: colors.primary,
    height: 60,
    borderRadius: 30,
    marginTop: 20,
    justifyContent: 'center',
  },
  loginButtonText: {
    margin: 8,
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  dividerText: {
    textAlign: 'center',
    marginVertical: 20,
    color: colors.gray,
  },
  googleButton: {
    borderWidth: 1,
    borderColor: colors.primary,
    height: 60,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  googleIcon: {
    height: 20,
    width: 20,
  },
  googleButtonText: {
    margin: 8,
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary,
    marginLeft: 8,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  signupText: {
    color: '#6B7280',
  },
  signupLink: {
    color: colors.primary,
    fontWeight: 'bold',
    marginLeft: 4,
  },
});

export default LoginScreen;