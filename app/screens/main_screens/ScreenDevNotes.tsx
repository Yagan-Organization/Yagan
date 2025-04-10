import * as React from "react";
import { View, Text } from "react-native";
import Menu from '@/components/MenuComponents/Menu';


export default function ScreenDevNotes() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>Account Screen</Text>
            <Menu></Menu>
        </View>
    );
}

