import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

import 'react-native-reanimated';

SplashScreen.preventAutoHideAsync();

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="signin" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ headerShown: false }} />
    </Stack>
  );
}
