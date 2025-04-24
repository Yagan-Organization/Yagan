import * as React from "react";
import { View, Text } from "react-native";
import Menu from '@/components/MenuComponents/Menu';
import AccountBar from "@/components/AccountComponents/AccountBar";
import AccountStatus from "@/components/AccountComponents/AccountStatus";


export default function ScreenAccount() {
    return (
        <View
            style={{
                marginBottom: 40,
                flex: 1,
                flexDirection: 'column',
                justifyContent: "space-between",
                alignItems: "left",
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 0,

            }}
        >
            <Text
                style={{
                    textAlign: "left",
                    fontWeight: '600',
                    margin: 10,
                    flexDirection: 'row',
                    fontSize: 48,
                    color: "#000000",
                }}
            >
                My Account
            </Text>
            <AccountStatus></AccountStatus>
            <AccountBar></AccountBar>
            <Menu></Menu>
        </View>
    );
}
