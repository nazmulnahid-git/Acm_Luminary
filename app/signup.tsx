import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import tw from 'twrnc';
import { FontAwesome6, Ionicons, SimpleLineIcons } from '@expo/vector-icons';

const SignUp = () => {
  const router = useRouter();
  const [secureEntry, setSecureEntry] = useState(true);

  const handleGoBack = () => {
    router.back();
  };

  const handleLogin = () => {
    router.replace('/auth/signin');
  };

  return (
    <View style={tw`flex-1 bg-white p-5 justify-center`}>
      <TouchableOpacity
        style={tw`h-10 w-10 bg-gray-300 rounded-full items-center justify-center`}
        onPress={handleGoBack}
      >
        <Ionicons name={'arrow-back-outline'} color="#075985" size={25} />
      </TouchableOpacity>
      <View style={tw`my-4`}>
        <Text style={tw`text-4xl text-sky-800 font-semibold`}>
          Let's get started
        </Text>
      </View>
      {/* Form */}
      <View style={tw`mt-5`}>
        <View style={tw`flex-row justify-between`}>
          <View
            style={tw`border border-sky-800 rounded-full flex-row items-center p-2 my-2 h-15 w-[48%]`}
          >
            <Ionicons
              style={tw`m-2`}
              name={'person-outline'}
              size={25}
              color="#6B7280"
            />
            <TextInput
              style={tw`flex-1 p-1`}
              placeholder="First Name"
              placeholderTextColor="#6B7280"
            />
          </View>
          <View
            style={tw`border border-sky-800 rounded-full flex-row items-center p-2 my-2 h-15 w-[48%]`}
          >
            <Ionicons style={tw`m-2`} size={25} color="#6B7280" />
            <TextInput
              style={tw`flex-1 p-1`}
              placeholder="Last Name"
              placeholderTextColor="#6B7280"
            />
          </View>
        </View>

        {/* Email */}
        <View
          style={tw`border border-sky-800 h-15 rounded-full flex-row items-center p-2 my-2`}
        >
          <Ionicons
            style={tw`m-2`}
            name={'mail-outline'}
            size={25}
            color="#6B7280"
          />
          <TextInput
            style={tw`flex-1 p-1`}
            placeholder="Enter Your Email"
            placeholderTextColor="#6B7280"
            keyboardType="email-address"
          />
        </View>

        {/* Password */}
        <View
          style={tw`border border-sky-800 h-15 rounded-full flex-row items-center p-2 my-2`}
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

        {/* Re-type Password */}
        <View
          style={tw`border border-sky-800 h-15 rounded-full flex-row items-center p-2 my-2`}
        >
          <SimpleLineIcons
            style={tw`m-2`}
            name={'lock'}
            size={25}
            color="#6B7280"
          />
          <TextInput
            style={tw`flex-1 p-1`}
            placeholder="Re-type Your Password"
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
        <TouchableOpacity style={tw`bg-sky-800 h-15 rounded-full mt-5`}>
          <Text
            style={tw`m-2 text-white text-lg font-semibold text-center py-2`}
          >
            Sign Up
          </Text>
        </TouchableOpacity>

        <Text style={tw`text-center my-5 text-sky-800`}>or continue with</Text>

        <TouchableOpacity
          style={tw`border border-sky-800 h-15 rounded-full flex-row items-center justify-center p-2`}
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
          <Text style={tw`text-gray-500`}>Already have an account?</Text>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={tw`text-sky-800 font-bold ml-1`}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
