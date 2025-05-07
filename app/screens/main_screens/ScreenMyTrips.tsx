import * as React from "react";
import {View, Text, ScrollView} from "react-native";
import Menu from '@/components/MenuComponents/Menu';
import colors from '@/constants/colors';
import Train from "@/components/TrainComponents/train";

/**
 * Renders a styled button labeled "Organize a trip" with a red background and rounded corners.
 *
 * This component is purely presentational and does not handle any user interaction or state.
 */
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

/**
 * Renders the main screen layout for displaying and organizing trips.
 *
 * Displays a header with the title "My Trips", a scrollable area containing trip information, a button to organize a new trip, and a bottom menu.
 */
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

