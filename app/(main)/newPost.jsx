import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'

const NewPostScreen = () => {
  return (
    <ScreenWrapper bg='white'>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>NewPostScreen</Text>
      </View>
    </ScreenWrapper>
  )
}

export default NewPostScreen

const styles = StyleSheet.create({})