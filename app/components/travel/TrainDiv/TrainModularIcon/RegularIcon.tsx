/*
This components is used to display the train type and number ONLY for S-Bahn, Regional and Regional Express trains.
to ensure, the icon remains recognizable as a reference to the original CFF symbol and to respect the new Yagan UI Guidelines.
Check the Yagan UI Guidelines for more information: https://www.figma.com/community/file/1509107464533831067/yagan-ui-guidelines
* */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '@/app/constants/colors';

// Define the props interface
interface RegularIconProps {
    TrainNumber: string;
    TrainType: string;
}

/**
 * Displays a styled icon for S-Bahn, Regional, or Regional Express trains, showing the train type and number.
 *
 * @param TrainNumber - The train's identifying number to display.
 * @param TrainType - The train type label (e.g., "S", "RE", "RB") to display.
 *
 * @returns A React element rendering the train type and number with distinct styles according to Yagan UI Guidelines.
 */
export default function RegularIcon({ TrainNumber, TrainType }: RegularIconProps) {
    return (
        <View style={styles.Container}>
            <View style={styles.TypeContainer}>
                <Text style={styles.TrainTypeText}>
                    {TrainType}
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
        backgroundColor: colors.red,
    },

    TrainTypeText: {
        fontSize: 14,
        fontWeight: 700,
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
