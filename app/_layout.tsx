import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {};

const RootLayout = (props: Props) => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: 'Home' }}
      />
      <Stack.Screen name="job/[id]" options={{ title: 'job detail' }} />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
