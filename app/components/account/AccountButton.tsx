import React from "react";
import { View, Text, StyleSheet} from "react-native";
import {colors} from "@/app/constants/colors";

export default function AccountButton(Color: string, ColorText: string) {

    return(
        <View style={styles.Button}>

            <Text style={styles.Text}>
                Notifications
            </Text>
        </View>
    )

}

const styles = StyleSheet.create({
    Button:{
        height: 50,
        width: '100%',
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        shadowColor: "rgba(217, 217, 217, 0.2)",
        shadowOffset: {
            width: -5,
            height: 5
        },
    },
    Text: {
        color: "",
        fontSize: 16,
    },
});
