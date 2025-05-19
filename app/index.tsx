import { View, Text } from 'react-native';
import SearchBar from './components/travel/SearchBar';
import Menu from './components/Menu/Menu'

export default function Travel() {
    return (
        <View
        style={{
            margin: 16,
        }}
        >
            <SearchBar></SearchBar>
            <Menu></Menu>
        </View>
    );
}
