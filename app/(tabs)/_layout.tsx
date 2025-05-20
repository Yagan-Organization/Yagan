import { Tabs } from 'expo-router';
import { View } from 'react-native';
import Menu from '../components/Menu/Menu';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // Hide the default tab bar since we're using our custom Menu
        tabBarStyle: { display: 'none' },
        // Hide the header for all tab screens
        headerShown: false,
      }}
      tabBar={() => (
        <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <Menu />
        </View>
      )}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Travel',
        }}
      />
      <Tabs.Screen
        name="my-trips"
        options={{
          title: 'My Trips',
        }}
      />
      <Tabs.Screen
        name="dev-notes"
        options={{
          title: 'Dev Notes',
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
        }}
      />
    </Tabs>
  );
}

