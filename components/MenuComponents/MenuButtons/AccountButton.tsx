import { View, Image } from 'react-native';
import colors from '@/constants/colors';


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
            <Image
                style={{
                    width: 40,
                    height: 28.2,
                    resizeMode: 'contain',
                }}
                source={require('@/assets/images/icoMenu/account.svg')}
            />
        </View>
    );
}

