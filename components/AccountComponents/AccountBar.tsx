import React from 'react';
import { View } from 'react-native';
import colors from '../../constants/colors';
import ButtonAccountScreen from '@/components/AccountComponents/ButtonAccountScreen';


export default function AccountBar() {
    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: colors.background,
                borderColor: colors.SoftAnthracite,
                borderWidth: 1,
                borderRadius: 20,
                width: '400',
                height: '260',
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                elevation: 5,
                paddingHorizontal: 10,
                paddingVertical: 15,
                gap: '10%',

            }}
        >

            <ButtonAccountScreen BtnText="Données personnelles" />
            <ButtonAccountScreen BtnText="Notifications"/>
            <ButtonAccountScreen BtnText="Release & Patch Notes"/>
            <ButtonAccountScreen BtnText="Politique et condition d'utilisation" />
        </View>
    )
}
