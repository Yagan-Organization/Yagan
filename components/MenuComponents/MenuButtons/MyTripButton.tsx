import { View } from 'react-native';
import colors from '@/constants/colors';
import Mytrip from '@/assets/images/icoMenu/mytrip';


export default function TravelButton() {
    return (
        <View
            style={{
                zIndex: 2,
                justifyContent: 'center',
                alignItems: 'center', // Correction de 'Center' en 'center'
                width: 50, // Utilisation d'un nombre au lieu d'une chaîne
                height: 50, // Même correction ici
                backgroundColor: colors.background,
                borderRadius: 50,
            }}>
            <Mytrip></Mytrip>
        </View>
    );
}

