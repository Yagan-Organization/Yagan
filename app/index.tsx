import { View, Text } from 'react-native';
import SearchBar from './components/travel/SearchBar';

export default function Travel() {
    return (
        <View
        style={{
            margin: 16,
        }}
        >
            <SearchBar></SearchBar>
        </View>
    );
}
