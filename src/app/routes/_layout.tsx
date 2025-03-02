import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const RootLayout = () => {
  return (
   <>
    <Stack screenOptions={{ headerShown: false }}/>
    <StatusBar style="auto"/>
   </>
  )
};

export default RootLayout;
