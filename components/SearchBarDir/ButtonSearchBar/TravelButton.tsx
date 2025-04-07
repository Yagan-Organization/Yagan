import { View, Image } from 'react-native';
import colors from '@/constants/colors';


export default function TravelButton() {
    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center', // Correction de 'Center' en 'center'
                width: 50, // Utilisation d'un nombre au lieu d'une chaîne
                height: 50, // Même correction ici
                backgroundColor: colors.background,
                borderRadius: 50,
            }}>
            <Image
                style={{
                    width: 40,
                    height: 28.2,
                    resizeMode: 'contain',
                }}
                source={require('@/assets/images/travel.png')}
            />
        </View>
    );
}

