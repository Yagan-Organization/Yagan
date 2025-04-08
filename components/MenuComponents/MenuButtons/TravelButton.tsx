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
                backgroundColor: 'none',
                borderRadius: 50,
            }}>
            <Image
                style={{
                    borderColor: 'black',
                    width: 40,
                    height: 28.2,
                }}
                source={require('@/assets/images/icoMenu/travel.svg')}
            />
        </View>
    );
}

