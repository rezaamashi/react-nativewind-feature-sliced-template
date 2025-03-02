import { registerRootComponent } from 'expo';
import 'app/styles/global.css';
import { ExpoRoot } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";


const App = () => {
  const ctx = require.context('routes');

  return (
    <SafeAreaProvider> 
      <ExpoRoot context={ctx} />
    </SafeAreaProvider>
  );
}

registerRootComponent(App);
