// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from '@expo/vector-icons/Ionicons';

export function TabBarIcon({ name, ...rest }) {
  const { style } = rest;
  return (
    <Ionicons
      name={name}
      size={24}
      style={[{ marginBottom: -3 }, style]}
      {...rest}
    />
  );
}
