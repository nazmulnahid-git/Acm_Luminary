import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Header from '../../components/Header'
import { wp } from '@/helpers/common';

const NotificationScreen = () => {
  return (
    <ScreenWrapper bg='white'>
      <View style={styles.container}>
        <Header title="Notifications" />
      </View>
    </ScreenWrapper>
  )
}

export default NotificationScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
    paddingHorizontal: wp(4),
    gap: 15,
  },
})