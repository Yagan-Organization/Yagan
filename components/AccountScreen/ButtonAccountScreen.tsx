import { View, Text,  } from 'react-native';
import React from 'react';
import colors from '../../constants/colors';

export default function ButtonAccountScreen(){
    return (
        <View
        style={{
       width: "auto",
        height: 40,
        borderWidth: 1,
            borderRadius: 50,
        borderColor: colors.SoftAnthracite,
        justifyContent: 'center', // Centrer verticalement
        alignItems: 'center', // Centrer horizontalement
        }}>
            <Text style={{
                fontWeight: 600,
                margin: 10,
                flexDirection: 'row',
                fontSize: 18,
                color: colors.SoftAnthracite,
                textAlign: "left",
            }}>Account</Text>
        </View>
    )
}

