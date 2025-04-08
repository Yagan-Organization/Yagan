import { View } from 'react-native';
import colors from '@/constants/colors';
import Account from '@/assets/images/icoMenu/account'

export default function TravelButton() {
    return (
        <View
            style={{
                zIndex: 2,
                justifyContent: 'center',
                alignItems: 'center',
                width: 50,
                height: 50,
                backgroundColor: colors.background,
                borderRadius: 50,
            }}>
            <Account></Account>
        </View>
    );
}

