import { View } from "react-native";
import Menu from '@/components/MenuComponents/Menu';
import SearchBar from "@/components/SearchBar/SearchBar";
import * as React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenAccount from "@/app/screens/main_screens/ScreenAccount";

export default function Index() {
  return (
    <View
      style={{
        marginBottom: 40,
        flex: 1,
        flexDirection: 'column-reverse',
        justifyContent: "space-between",
        alignItems: "center",

      }}
    >
       <Menu />
        <SearchBar />
    </View>

  );

}

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Index} />
            <Stack.Screen name="ScreenAccount" component={ScreenAccount} />

        </Stack.Navigator>
    );
}
