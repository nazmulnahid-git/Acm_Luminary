import { View, Text } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Header from '../../components/Header'

const NotificationScreen = () => {
  return (
    <ScreenWrapper bg='white'>
      <Header title="Notifications" />
    </ScreenWrapper>
  )
}

export default NotificationScreen;