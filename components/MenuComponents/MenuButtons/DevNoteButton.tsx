import { View, Image } from 'react-native';
import colors from '@/constants/colors';


export default function TravelButton() {
    return (
        <View
            style={{
                zIndex: 2,
                justifyContent: 'center',
                alignItems: 'center', // Correction de 'Center' en 'center'
                width: 50, // Utilisation d'un nombre au lieu d'une chaîne
                height: 50, // Même correction ici
                backgroundColor: 'none',
                borderRadius: 50,
            }}>
            <Image
                style={{
                    width: 40,
                    height: 28.2,
                    resizeMode: 'contain',
                }}
                source={require('@/assets/images/icoMenu/devnote.svg')}
            />
        </View>
    );
}

