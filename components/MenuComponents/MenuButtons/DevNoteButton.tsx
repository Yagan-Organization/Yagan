import { TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Devnote from '@/assets/images/icoMenu/devnote';

type RootStackParamList = {
    ScreenTravel: undefined;
    ScreenAccount: undefined;
    ScreenDevNotes: undefined;
    ScreenMyTrip: undefined;
};

interface DevNoteButtonProps {
    isSelected: boolean;
    onPress: () => void;
}

export default function DevNoteButton({ isSelected, onPress }: DevNoteButtonProps) {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handlePress = () => {
        onPress();
        navigation.navigate('ScreenDevNotes');
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
            <Devnote fill={isSelected ? '#FFFFFF' : '#000000'} />
        </TouchableOpacity>
    );
}

