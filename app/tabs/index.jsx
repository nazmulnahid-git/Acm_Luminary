import { View, Text } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'

const HomeScreen = () => {
  return (
    <ScreenWrapper bg='white'>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home</Text>
      </View>
    </ScreenWrapper>
  )
}

export default HomeScreen;