import Ionicons from '@expo/vector-icons/Ionicons';

export function TabBarIcon({ name, ...rest }) {
  const { style } = rest;
  return (
    <Ionicons
      name={name}
      size={27}
      style={[{ marginBottom: -3 }, style]}
      {...rest}
    />
  );
}
