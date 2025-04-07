import { View } from 'react-native';
import colors from '@/constants/colors';

export default function SelectButton() {
    return (
        <View style={{
            position: 'relative',
            zIndex: 5,
            backgroundColor: colors.red,
            borderRadius: 80,
            width: 60,
            height: 60,
        }}></View>
    )
}
