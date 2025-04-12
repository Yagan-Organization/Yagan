import React from 'react';
import { View } from 'react-native';
import colors from '../../constants/colors';

export default function AccountBar(props: any) {
    return (
        <View
            style={{
                backgroundColor: colors.SoftAnthracite,
                width: 400,
                height: 400,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                elevation: 5,
            }}
        >

        </View>
    )
}
