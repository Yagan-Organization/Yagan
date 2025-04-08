import { View } from 'react-native';
import Travel from '@/assets/images/icoMenu/travel';


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
            <Travel></Travel>
        </View>
    );
}

