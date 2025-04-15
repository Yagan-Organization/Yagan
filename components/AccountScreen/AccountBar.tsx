import React from 'react';
import { View } from 'react-native';
import colors from '../../constants/colors';
import ButtonAccountScreen from './ButtonAccountScreen';

export default function AccountBar(props: any) {
    return (
        <View
            style={{
                flexDirection: 'column',
                backgroundColor: colors.background,
                borderColor: colors.SoftAnthracite,
                borderWidth: 1,
                borderRadius: 20,
                width: 400,
                height: 400,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                elevation: 5,
                padding: 10,

            }}
        >
            <ButtonAccountScreen></ButtonAccountScreen>

        </View>
    )
}
