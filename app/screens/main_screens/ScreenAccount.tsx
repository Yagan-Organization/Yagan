import * as React from "react";
import { View, Text } from "react-native";
import Menu from '@/components/MenuComponents/Menu';
import AccountScreen from "@/components/AccountScreen/AccountScreen";



export default function ScreenAccount() {
    return (
        <View
            style={{
                marginBottom: 40,
                flex: 1,
                flexDirection: 'column',
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <AccountScreen></AccountScreen>
            <Menu></Menu>
        </View>
    );
}
