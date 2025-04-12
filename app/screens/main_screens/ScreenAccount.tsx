import * as React from "react";
import { View, Text } from "react-native";
import Menu from '@/components/MenuComponents/Menu';
import AccountBar from "@/components/AccountScreen/AccountBar";



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
            <AccountBar></AccountBar>
            <Menu></Menu>
        </View>
    );
}
