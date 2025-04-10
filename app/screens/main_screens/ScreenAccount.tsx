import * as React from "react";
import { View, Text } from "react-native";
import Menu from '@/components/MenuComponents/Menu';



export default function ScreenAccount() {
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
            <Menu></Menu>
        </View>
    );
}
