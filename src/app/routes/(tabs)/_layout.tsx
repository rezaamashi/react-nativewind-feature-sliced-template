import { Tabs } from 'expo-router';

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          /* tabBarIcon: () => ({ sfSymbol: "house" }), */
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          /* tabBarIcon: () => ({ sfSymbol: "person" }), */
        }}
      />
    </Tabs>

  )
};

export default TabLayout;
