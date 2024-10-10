import { Text } from 'react-native';
import React from 'react';
import ScreenWrapper from '@/components/ScreenWrapper';
import Home from '@/assets/Icons/Home';
import Profile from '@/assets/Icons/Profile';
import Notification from '@/assets/Icons/Notification';
import Community from '@/assets/Icons/Community';

const index = () => {
  return (
    <ScreenWrapper>
      <Text>index</Text>
      <Home />
      <Profile />
      <Notification />
      <Community />
    </ScreenWrapper>
  );
};

export default index;
