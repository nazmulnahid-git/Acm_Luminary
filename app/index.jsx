import { View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Loading from '../components/Loading'

const index = () => {
  return (
    <ScreenWrapper bg='white'>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Loading />
      </View>
    </ScreenWrapper>
  )
}

export default index;