import { Tabs } from 'expo-router';
import React from 'react';
import { IconHome, IconProfile, IconCommunity, IconEvent } from '../../assets/icons/Icons';
import { theme } from '../../constants/theme';
const { colors } = theme;

export default function TabLayout() {
  const tabs = [
    { path: 'index', title: 'Home', icon: <IconHome strokeWidth={1.6} height={25} width={25} color={colors.gray} /> },
    { path: 'community', title: 'Community', icon: <IconCommunity strokeWidth={1.6} height={25} width={25} color={colors.gray} /> },
    { path: 'notification', title: 'Notifications', icon: <IconEvent strokeWidth={1.6} height={25} width={25} color={colors.gray} /> },
    { path: 'profile', title: 'Profile', icon: <IconProfile strokeWidth={1.6} height={25} width={25} color={colors.gray} /> },
  ];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 50,
          paddingTop: 5,
          backgroundColor: '#F2F3FA',
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
              React.cloneElement(tab.icon, {
                color: focused ? colors.primary : colors.gray,
                strokeWidth: focused ? 1.9 : 1.6,
              })
            ),
          }}
        />
      ))}
    </Tabs>
  );
}