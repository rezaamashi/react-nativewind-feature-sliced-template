import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';

export function Home() {

  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
};
