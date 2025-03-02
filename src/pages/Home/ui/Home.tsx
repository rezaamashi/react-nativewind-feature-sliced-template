import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';

export function HomePage() {

  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text>Open up App.tsx to start working on your app!</Text>
      <Link href={'/random-page'}>Go to 404</Link>
      <StatusBar style="auto" />
    </View>
  )
};
