import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import {colors} from "@/app/constants/colors";

interface AccountButtonProps {
    IconPNG: any; // React Native image source type
    ButtonText: string;
    IconSize?: number; // Optional icon size, defaults to 20
}

export default function AccountButton({ IconPNG, ButtonText, IconSize = 20 }: AccountButtonProps) {

    return(
        <View style={styles.Button}>
            <TouchableOpacity style={styles.Touch}>
                <Image source={IconPNG} style={[styles.Icon, { width: IconSize, height: IconSize }]} />
            <Text style={styles.Text}>
                {ButtonText}
            </Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    Button:{
        display: "flex",
        flexDirection: "row",
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

    Touch:{
        gap: 5,

        alignItems: 'center',
        justifyContent: 'center',
        display: "flex",
        flexDirection: "row",
        width: '100%',
        height: '100%',

    },
    Text: {
        fontSize: 20,
        fontWeight: "400",
    },

    Icon: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    }
});
