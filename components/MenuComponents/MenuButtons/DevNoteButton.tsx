import { View } from 'react-native';
import colors from '@/constants/colors';
import DevNote from '@/assets/images/icoMenu/devNote.svg';

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
            <DevNote width={26} height={30} />
        </View>
    );
}

