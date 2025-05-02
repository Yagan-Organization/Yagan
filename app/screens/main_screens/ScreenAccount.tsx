import * as React from "react";
import { View, Text } from "react-native";
import Menu from '@/components/MenuComponents/Menu';
import AccountBar from "@/components/AccountComponents/AccountBar";
import AccountStatus from "@/components/AccountComponents/AccountStatus";


export default function ScreenAccount() {
    return (
        <View
        style={{
            flex: 1,
            paddingVertical: 30,
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            paddingHorizontal: '10',
            alignContent: 'center'

        }}
        >


        <View>
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
            <View
            style={{
                width: 400,
                gap: 10,
            }}
            >
                <AccountStatus></AccountStatus>
                <AccountBar></AccountBar>
            </View>
        </View>

            <Menu></Menu>
        </View>
    );
}
