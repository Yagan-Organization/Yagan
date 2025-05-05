import * as React from "react";
import {View, Text, ScrollView} from "react-native";
import Menu from '@/components/MenuComponents/Menu';
import colors from '@/constants/colors';
import Train from "@/components/TrainComponents/train";

function ButtonTrip() {
    return (
        <View
            style={{
                backgroundColor: colors.red,
                width: '90%',
                height: 48,
                marginBottom: 20,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 40,
            }}
        >
            <Text
            style={{
                color: 'white',
                fontWeight: 'medium',
                fontSize: 18,

            }}
            >Organize a trip</Text>
        </View>
    );
}

export default function ScreenMyTrips() {
    return (
        <View
            style={{
                marginBottom: 40,
                flex: 1,
                flexDirection: 'column',
                justifyContent: "space-between",
                alignItems: "center",

            }}
        >
            <View
            style={{
                paddingHorizontal: 20,
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                backgroundColor: "#f0f0f0",
                width: "100%",
            }}
            >
            <Text
                style={{
                    fontSize: 48,
                    fontWeight: "bold",
                }}
            >My Trips</Text>
            </View>
            <ScrollView
            style={{
                padding: 0,
                height: '60%',
                flexDirection: 'column',
                paddingHorizontal: 20,
                backgroundColor: "#f0f0f0",
                width: "auto",
            }}
            >
                <Train></Train>

            </ScrollView>
            <ButtonTrip />
            <Menu></Menu>
        </View>
    );
}

