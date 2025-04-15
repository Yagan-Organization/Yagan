import React from 'react';
import { View, Text, } from 'react-native';
import AccountPicture from "@/assets/images/icoAccountBar/AccountPicture";

export default function AccountStatus() {
    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 4,
                height: 80,
                borderRadius: 20,
                width: 400,
                borderWidth: 1,
            }}
        >
            <AccountPicture></AccountPicture>
            <Text
                style={{
                    fontWeight: '600',
                    margin: 10,
                    flexDirection: 'row',
                    fontSize: 24,
                    color: "#000000",
                    textAlign: "left",
                }}

            > Mathéo Delessert
                hello@matheodelessert.ch
            </Text>

        </View>
    )
}
