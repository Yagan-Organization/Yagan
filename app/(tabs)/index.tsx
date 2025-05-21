import { View } from 'react-native';
import SearchBar from '../components/travel/SearchBar';

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
        </View>
    );
}

