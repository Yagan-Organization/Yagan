import {TouchableOpacity, View} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import colors from '@/constants/colors';
import Account from '@/assets/images/icoMenu/account';

type RootStackParamList = {
    Home: undefined;
    ScreenAccount: undefined;
};

interface AccountButtonProps {
    isSelected: boolean;
    onPress: () => void;
}

export default function AccountButton({ isSelected, onPress }: AccountButtonProps) {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handlePress = () => {
        onPress();
        navigation.navigate('ScreenAccount');
    };

    return (
        <View>
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
            <Account fill={isSelected ? '#FFFFFF' : '#000000'} />
        </TouchableOpacity>
        </View>
    );
}
