import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router'; // Use useRouter from Expo Router
import tw from 'twrnc'; // Import Tailwind CSS
import { Ionicons, SimpleLineIcons, FontAwesome6 } from '@expo/vector-icons';

const LoginScreen = () => {
  const router = useRouter(); // Use router instead of useNavigation
  const [secureEntry, setSecureEntry] = useState(true);

  const handleGoBack = () => {
    router.back(); // Navigate back
  };
  const handleSignup = () => {
    router.push('/auth/signup'); // Navigate to signup page
  };

  return (
    <View style={tw`flex-1 bg-white p-5 justify-center`}>
      <TouchableOpacity
        style={tw`h-10 w-10 bg-gray-300 rounded-full items-center justify-center`}
        onPress={handleGoBack}
      >
        <Ionicons name={'arrow-back-outline'} color="#075985" size={25} />
      </TouchableOpacity>
      <View style={tw`my-5`}>
        <Text style={tw`text-4xl text-sky-800 font-semibold`}>Hey,</Text>
        <Text style={tw`text-4xl text-sky-800 font-semibold`}>Welcome</Text>
        <Text style={tw`text-4xl text-sky-800 font-semibold`}>Back</Text>
      </View>
      {/* Form */}
      <View style={tw`mt-5`}>
        <View
          style={tw`border border-sky-800 rounded-full flex-row items-center p-2 my-2`}
        >
          <Ionicons
            style={tw`m-2`}
            name={'mail-outline'}
            size={25}
            color="#6B7280"
          />
          <TextInput
            style={tw`flex-1  p-1`}
            placeholder="Enter Your Email"
            placeholderTextColor="#6B7280"
            keyboardType="email-address"
          />
        </View>
        <View
          style={tw`border border-sky-800 rounded-full flex-row items-center p-2 my-2`}
        >
          <SimpleLineIcons
            style={tw`m-2`}
            name={'lock'}
            size={25}
            color="#6B7280"
          />
          <TextInput
            style={tw`flex-1 p-1`}
            placeholder="Enter Your Password"
            placeholderTextColor="#6B7280"
            secureTextEntry={secureEntry}
          />
          <TouchableOpacity onPress={() => setSecureEntry((prev) => !prev)}>
            <FontAwesome6
              style={tw`m-2`}
              name={secureEntry ? 'eye' : 'eye-slash'}
              size={15}
              color="#6B7280"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={tw`text-right text-sky-800 font-semibold my-2`}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`bg-sky-800 rounded-full mt-5`}>
          <Text
            style={tw`m-2 text-white text-lg font-semibold text-center py-2`}
          >
            Login
          </Text>
        </TouchableOpacity>
        <Text style={tw`text-center my-5 text-sky-800`}>or continue with</Text>
        <TouchableOpacity
          style={tw`border border-sky-800 rounded-full flex-row items-center justify-center p-2`}
        >
          <Image
            source={require('@/assets/images/google.png')}
            style={tw`h-5 w-5`}
          />
          <Text style={tw`m-2 text-lg font-semibold text-sky-800 ml-2`}>
            Google
          </Text>
        </TouchableOpacity>
        <View style={tw`flex-row justify-center items-center my-5`}>
          <Text style={tw`text-gray-500`}>Don’t have an account?</Text>
          <TouchableOpacity onPress={handleSignup}>
            <Text style={tw`text-sky-800 font-bold ml-1`}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
