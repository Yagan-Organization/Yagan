import { View } from "react-native";
import colors from '@/constants/colors'
import TravelButton from "@/components/SearchBarDir/ButtonSearchBar/TravelButton";
import MyTripButton from "@/components/SearchBarDir/ButtonSearchBar/MyTripButton";
import DevNoteButton from "@/components/SearchBarDir/ButtonSearchBar/DevNoteButton";
import AccountButton from "@/components/SearchBarDir/ButtonSearchBar/AccountButton";

export default function SearchBar() {
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
