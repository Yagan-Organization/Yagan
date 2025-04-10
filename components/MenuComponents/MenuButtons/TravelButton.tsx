import { TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Travel from '@/assets/images/icoMenu/travel';

type RootStackParamList = {
    ScreenTravel: undefined;
    ScreenAccount: undefined;
};

interface TravelButtonProps {
    isSelected: boolean;
    onPress: () => void;
}

export default function TravelButton({ isSelected, onPress }: TravelButtonProps) {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handlePress = () => {
        onPress();
        navigation.navigate('ScreenTravel');
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
            <Travel fill={isSelected ? '#FFFFFF' : '#000000'} />
        </TouchableOpacity>
    );
}
