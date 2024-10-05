import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from './TabBarIcon';

export default function TabLayout() {
  const tabs = [
    { path: 'index', icon: 'home', title: 'Home' },
    { path: 'community', icon: 'people', title: 'Community' },
    { path: 'notifications', icon: 'notifications', title: 'Notifications' },
    { path: 'profile', icon: 'person', title: 'Profile' },
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
              <TabBarIcon
                name={focused ? tab.icon : `${tab.icon}-outline`}
                color="#0C4A6E"
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
