import { View } from 'react-native';
import colors from '@/constants/colors';
import Devnote from '@/assets/images/icoMenu/devnote';

export default function DevNoteButton() {
    return (
        <View
            style={{
                zIndex: 2,
                justifyContent: 'center',
                alignItems: 'center',
                width: 50,
                height: 50,
                backgroundColor: colors.background,
                borderRadius: 50,
            }}>
            <Devnote></Devnote>
        </View>
    );
}

