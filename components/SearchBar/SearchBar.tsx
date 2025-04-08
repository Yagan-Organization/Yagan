import { View } from 'react-native';
import colors from '@/constants/colors'
import PositionLine from './PositionLine'
import TextInputSearch from './TextInputSearch'



export default function SearchBar() {
    return (
        <View style={{
            marginTop: 10,
            borderRadius: 20,
            width: 400,
            height: 140,
            flexDirection: "row",
            paddingLeft: 60,
            paddingRight: 20,
            justifyContent: 'center',
            backgroundColor: colors.background,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 5,
        }}>

            <PositionLine></PositionLine>
            <TextInputSearch></TextInputSearch>
        </View>
    )
}
