import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { router } from 'expo-router'

const index = () => {
  return (
    <ScreenWrapper bg='white'>
      <Pressable onPress={()=> router.push('/welcome')}>
        <Text> Go to welcome </Text>
      </Pressable>
    </ScreenWrapper>
  )
}

export default index

const styles = StyleSheet.create({})