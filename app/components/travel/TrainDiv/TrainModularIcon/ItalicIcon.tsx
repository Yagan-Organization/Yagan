/*
This components is used to display the train type and number ONLY for InterCity, InterRegio and EC trains.
to ensure, the icon remains recognizable as a reference to the original CFF symbol and to respect the new Yagan UI Guidelines.
Check the Yagan UI Guidelines for more information: https://www.figma.com/community/file/1509107464533831067/yagan-ui-guidelines
* */


import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '@/app/constants/colors';

// Define the props interface
interface ItalicIconProps {
    TrainNumber: string;
    TrainType: string;
}

/**
 * Displays a styled icon showing the train type and train number for InterCity, InterRegio, and EC trains.
 *
 * @param TrainNumber - The train's identifying number.
 * @param TrainType - The type of train (e.g., InterCity, InterRegio, EC).
 *
 * @returns A React element rendering the train type in an italic red box and the train number in a bordered container.
 */
export default function ItalicIcon({ TrainNumber, TrainType }: ItalicIconProps) {
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
        fontStyle: 'italic',
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
