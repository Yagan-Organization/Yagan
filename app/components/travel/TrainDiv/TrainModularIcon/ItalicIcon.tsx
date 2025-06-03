/*
This components is used to display the train type and number ONLY for InterCity, InterRegio and EC trains.
to ensure, the icon remains recognizable as a reference to the original CFF symbol and to respect the new Yagan UI Guidelines.
Check the Yagan UI Guidelines for more information: https://www.figma.com/community/file/1509107464533831067/yagan-ui-guidelines
* */


import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '@/app/constants/colors';

/**
 * Renders a static icon representing an InterCity train type and number.
 *
 * Displays the train type "IC" in a red, italicized container and the train number "54" in a bordered container, styled according to Yagan UI Guidelines.
 *
 * @remark The train type and number are hardcoded and cannot be customized via props.
 */
export default function ItalicIcon(props: any) {
    return (
        <View style={styles.Container}>
            <View style={styles.TypeContainer}>
                <Text style={styles.TrainTypeText}>
                    IC
                </Text>
            </View>
            <View style={styles.NumberContainer}>
                <Text style={styles.TrainNumberText}>
                    54
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
