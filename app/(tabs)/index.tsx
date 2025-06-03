import { View } from 'react-native';
import SearchBar from '../components/travel/SearchBar';
import RegularIcon from '../components/travel/TrainDiv/TrainModularIcon/RegularIcon';
import ItalicIcon from "@/app/components/travel/TrainDiv/TrainModularIcon/ItalicIcon";

export default function Travel() {
    return (
        <View
        style={{
            marginHorizontal: 16,
            marginVertical: 8,
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingBottom: 80, // Add padding for the menu at bottom
        }}
        >
            <SearchBar></SearchBar>
            <RegularIcon></RegularIcon>
            <ItalicIcon></ItalicIcon>
        </View>
    );
}

