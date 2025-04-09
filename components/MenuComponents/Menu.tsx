import { View } from "react-native";
import colors from '@/constants/colors'
import TravelButton from "@/components/MenuComponents/MenuButtons/TravelButton";
import MyTripButton from "@/components/MenuComponents/MenuButtons/MyTripButton";
import DevNoteButton from "@/components/MenuComponents/MenuButtons/DevNoteButton";
import AccountButton from "@/components/MenuComponents/MenuButtons/AccountButton";
import SelectButton from "@/components/MenuComponents/MenuButtons/SelectButton";

export default function Menu() {
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

            <TravelButton ></TravelButton>
            <MyTripButton ></MyTripButton>
            <DevNoteButton></DevNoteButton>
            <AccountButton></AccountButton>
            <SelectButton></SelectButton>
        </View>
    );
}
