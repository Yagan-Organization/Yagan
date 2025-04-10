import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenHome from "./screens/main_screens/ScreenTravel";
import ScreenAccount from "@/app/screens/main_screens/ScreenAccount";
import ScreenMyTrips from "@/app/screens/main_screens/ScreenMyTrips";
import ScreenDevNotes from "@/app/screens/main_screens/ScreenDevNotes";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ScreenHome" component={ScreenHome} />
        <Stack.Screen name="ScreenAccount" component={ScreenAccount} />
        <Stack.Screen name="ScreenMyTrip" component={ScreenMyTrips} />
        <Stack.Screen name="ScreenDevNotes" component={ScreenDevNotes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
