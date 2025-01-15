import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hp } from '@/helpers/common'
import { theme } from '../constants/theme'
import { Image } from 'expo-image'

const Avatar = ({
  uri,
  size = hp(4.5),
  rounded = theme.radius.md,
  styles = {}
}) => {
  return (
    <Image
      source={uri}
      transition={100}
      style={[
        styles.avatar,
        styles,
        {
          width: size,
          height: size,
          borderRadius: rounded,
        }
      ]}
    />
  )
}

export default Avatar

const styles = StyleSheet.create({
  avatar: {
    borderRadius: theme.radius.md,
    borderCurve: 'continuous',
    borderWidth: 1,
    borderColor: theme.colors.darkLight,
  },
})