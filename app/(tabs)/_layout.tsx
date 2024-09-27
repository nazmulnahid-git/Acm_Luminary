import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';

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
      }}
    >
      {tabs.map((tab, index) => (
        <Tabs.Screen
          key={index}
          name={tab.path}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              <TabBarIcon name={focused ? tab.icon : `${tab.icon}-outline`} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
