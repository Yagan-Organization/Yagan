/*
This components is used to display the train type and number ONLY for S-Bahn Night trains.
to ensure, the icon remains recognizable as a reference to the original CFF symbol and to respect the new Yagan UI Guidelines.
Check the Yagan UI Guidelines for more information: https://www.figma.com/community/file/1509107464533831067/yagan-ui-guidelines
* */


import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '@/app/constants/colors';

// Define the props interface
interface SBahnNightIconProps {
    TrainNumber: string;
}

/**
 * Displays an icon for an S-Bahn Night train, showing the fixed train type "SN" and the provided train number.
 *
 * @param TrainNumber - The train number to display next to the "SN" type indicator.
 *
 * @returns A styled React Native component representing the S-Bahn Night train type and number.
 */
export default function SBahnNightIcon({ TrainNumber }: SBahnNightIconProps) {
    return (
        <View style={styles.Container}>
            <View style={styles.TypeContainer}>
                <Text style={styles.TrainTypeText}>
                    SN
                </Text>
            </View>
            <View style={styles.NumberContainer}>
                <Text style={styles.TrainNumberText}>
                    {TrainNumber}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        gap: 1,
    },
    TypeContainer: {
        alignItems: 'center',
        paddingHorizontal: 4,
        borderRadius: 3,
        backgroundColor: colors.SoftAntharcite,
    },

    TrainTypeText: {
        fontSize: 14,
        fontWeight: 700,
        fontStyle: 'normal',
        color: colors.white,
    },
    NumberContainer: {
        alignItems: 'center',
        paddingHorizontal: 4,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: colors.SoftAntharcite,


    },

    TrainNumberText: {
        fontSize: 14,
        fontWeight: 700,
        color: colors.SoftAntharcite,
    },

})
