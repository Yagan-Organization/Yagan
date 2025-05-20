import { View  } from 'react-native';
import SearchBar from './components/travel/SearchBar';
import Menu from './components/Menu/Menu'

export default function Travel() {
    return (
        <View
        style={{
            marginHorizontal: 16,
            marginVertical: 8,
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',

        }}
        >
            <SearchBar></SearchBar>
            <Menu></Menu>
        </View>
    );
}
