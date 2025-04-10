// components/MenuComponents/Menu.tsx
import React from "react";
import { View } from "react-native";
import colors from '@/constants/colors';
import TravelButton from "@/components/MenuComponents/MenuButtons/TravelButton";
import MyTripButton from "@/components/MenuComponents/MenuButtons/MyTripButton";
import DevNoteButton from "@/components/MenuComponents/MenuButtons/DevNoteButton";
import AccountButton from "@/components/MenuComponents/MenuButtons/AccountButton";
import SelectButton from "@/components/MenuComponents/MenuButtons/SelectButton";
import { useMenuContext } from "@/context/MenuContext";

export default function Menu() {
    const { selectedButton, setSelectedButton } = useMenuContext();
    const positions = [0, 70, 140, 210, 280]; // Positions approximatives pour chaque bouton

    return (
        <View
            style={{
                paddingLeft: 20,
                paddingRight: 20,
                backgroundColor: colors.background,
                width: 400,
                height: 80,
                borderRadius: 40,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 20,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                elevation: 5,
            }}
        >
            <SelectButton position={positions[selectedButton]} />
            <TravelButton isSelected={selectedButton === 0} onPress={() => setSelectedButton(0)} />
            <MyTripButton isSelected={selectedButton === 1} onPress={() => setSelectedButton(1)} />
            <DevNoteButton isSelected={selectedButton === 2} onPress={() => setSelectedButton(2)} />
            <AccountButton isSelected={selectedButton === 3} onPress={() => setSelectedButton(3)} />
        </View>
    );
}
