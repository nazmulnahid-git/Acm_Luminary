import { Tabs } from 'expo-router';
import React from 'react';
import { IconHome, IconProfile, IconCommunity, IconNotification } from '../../assets/icons/Icons';
import { theme } from '../../constants/theme';
const { colors } = theme;

export default function TabLayout() {
  const tabs = [
    { path: 'index', title: 'Home', icon: <IconHome strokeWidth={1.6} height={25} width={25} color={colors.gray} /> },
    { path: 'community', title: 'Community', icon: <IconCommunity strokeWidth={1.6} height={25} width={25} color={colors.gray} /> },
    { path: 'notification', title: 'Notifications', icon: <IconNotification strokeWidth={1.6} height={25} width={25} color={colors.gray} /> },
    { path: 'profile', title: 'Profile', icon: <IconProfile strokeWidth={1.6} height={25} width={25} color={colors.gray} /> },
  ];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 50,
          backgroundColor: '#F0F9FF',
          borderTopWidth: 0.5,
          shadowColor: 'transparent',
        },
      }}
    >
      {tabs.map((tab, index) => (
        <Tabs.Screen
          key={index}
          name={tab.path}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              tab.icon
            ),
          }}
        />
      ))}
    </Tabs>
  );
}