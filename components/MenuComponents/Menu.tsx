import { View } from "react-native";
import colors from '@/constants/colors'
import TravelButton from "@/components/MenuComponents/MenuButtons/TravelButton";
import MyTripButton from "@/components/MenuComponents/MenuButtons/MyTripButton";
import DevNoteButton from "@/components/MenuComponents/MenuButtons/DevNoteButton";
import AccountButton from "@/components/MenuComponents/MenuButtons/AccountButton";

export default function Menu() {
    return (
        <View
            style={{
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
                paddingLeft: 20,
                paddingRight: 20,
            }}
        >
            <TravelButton></TravelButton>
            <MyTripButton></MyTripButton>
            <DevNoteButton></DevNoteButton>
            <AccountButton></AccountButton>
        </View>
    );
}
