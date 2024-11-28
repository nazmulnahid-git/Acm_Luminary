import React, { useEffect } from 'react'
import { AuthProvider, useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'
import { Stack, useRouter } from 'expo-router'
import { getUserData } from '../services/UserService';

const _layout = () => {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  )
}

const MainLayout = () => {
  const { setAuth, user, setUser } = useAuth();
  const router = useRouter();
  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setAuth(session?.user);
        updateUserData(session?.user?.id);
        router.replace('/home');
      } else {
        setAuth(null);
        router.replace('/welcome');
      }
    })
  }, [])

  const updateUserData = async (user_id) => {
    const res = await getUserData(user_id);
    if (res.success) setUser(res.data);
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  )
}

export default _layout