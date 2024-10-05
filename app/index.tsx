import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import tw from 'twrnc';

const HomeScreen = () => {
  const router = useRouter();

  const handleSignIn = () => {
    router.push('/auth/signin');
  };

  const handleSignup = () => {
    router.push('/auth/signup');
  };

  return (
    <View style={tw`flex-1 items-center justify-center px-2`}>
      <Image
        source={require('@/assets/images/logo.png')}
        style={tw`h-20 w-30 `}
      />
      <Image
        source={require('@/assets/images/programmer.jpg')}
        style={tw`my-5 h-50 w-50`}
      />
      <Text style={tw`text-4xl font-semibold text-center text-sky-700`}>
        Welcome to ACM Luminary
      </Text>
      <Text style={tw`text-lg text-center text-gray-500 mt-4 px-6`}>
        Connect, collaborate, and grow with ACM community. Together, we build
        and share knowledge.
      </Text>
      <View
        style={tw`flex-row items-center justify-between mt-6 w-4/5 border-2 border-sky-800  h-15 rounded-full`}
      >
        <TouchableOpacity
          style={tw`flex-1 items-center justify-center bg-sky-800 rounded-full h-full`}
          onPress={handleSignIn}
        >
          <Text style={tw`text-white text-lg font-semibold`}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex-1 items-center justify-center rounded-full h-full`}
          onPress={handleSignup}
        >
          <Text style={tw`text-lg font-semibold`}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
