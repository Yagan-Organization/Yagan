import { View } from 'react-native';
import colors from '@/constants/colors'


export default function SearchBar() {
    return (
        <View style={{
            borderRadius: 20,
            width: 400,
            height: 160,
            flexDirection: "column",
            backgroundColor: colors.background,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 5,
            paddingLeft: 20,
            paddingRight: 20,

        }}>
        </View>
    )
}
