import { View } from 'react-native';
import colors from '@/constants/colors'


export default function SearchBar() {
    return (
        <View style={{
            flex: 1,
            width: 400,
            height: 120,
            flexDirection: "column",
            backgroundColor: colors.background,

        }}>
            <input type="text"/>
        </View>
    )
}
