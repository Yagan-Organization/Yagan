import { TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import colors from '@/constants/colors';
import Account from '@/assets/images/icoMenu/account';

type RootStackParamList = {
    Home: undefined;
    ScreenAccount: undefined;
};

export default function AccountButton() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('ScreenAccount')}
            style={{
                zIndex: 2,
                justifyContent: 'center',
                alignItems: 'center',
                width: 50,
                height: 50,
                backgroundColor: colors.background,
                borderRadius: 50,
            }}>
            <Account />
        </TouchableOpacity>
    );
}
