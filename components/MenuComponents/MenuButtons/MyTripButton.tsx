import { TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import MyTrip from '@/assets/images/icoMenu/mytrip';

type RootStackParamList = {
    Home: undefined;
    ScreenMyTrip: undefined;
};

interface MyTripButtonProps {
    isSelected: boolean;
    onPress: () => void;
}

export default function MyTripButton({ isSelected, onPress }: MyTripButtonProps) {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handlePress = () => {
        onPress();
        navigation.navigate('ScreenMyTrip');
    };

    return (
        <TouchableOpacity
            onPress={handlePress}
            style={{
                zIndex: 2,
                justifyContent: 'center',
                alignItems: 'center',
                width: 50,
                height: 50,
                backgroundColor: 'transparent',
                borderRadius: 50,
            }}
        >
            <MyTrip fill={isSelected ? '#FFFFFF' : '#000000'} />
        </TouchableOpacity>
    );
}
