import { Text, Pressable } from 'react-native';
import React from 'react';
import { hp } from '@/helpers/common';
import { theme } from '@/constants/theme';

const Button = ({
  title = '',
  loading = false,
  buttonStyle,
  textStyle,
  hasShadow = true,
  onPress = () => {},
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, hasShadow && styles.shadow, buttonStyle]}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
      {}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderCurve: 'continuous',
    borderRadiud: theme.radius.xl,
    height: hp(6.6),
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: hp(2.5),
    fontWeight: theme.fonts.bold,
  },
});
