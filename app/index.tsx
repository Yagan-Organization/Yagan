// app/index.tsx
import * as React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenHome from "./screens/main_screens/ScreenTravel";
import ScreenAccount from "@/app/screens/main_screens/ScreenAccount";
import ScreenMyTrips from "@/app/screens/main_screens/ScreenMyTrips";
import ScreenDevNotes from "@/app/screens/main_screens/ScreenDevNotes";
import { MenuProvider } from "@/context/MenuContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <MenuProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="ScreenTravel" component={ScreenHome} />
          <Stack.Screen name="ScreenAccount" component={ScreenAccount} />
          <Stack.Screen name="ScreenMyTrip" component={ScreenMyTrips} />
          <Stack.Screen name="ScreenDevNotes" component={ScreenDevNotes} />
        </Stack.Navigator>
      </MenuProvider>
  );
}
