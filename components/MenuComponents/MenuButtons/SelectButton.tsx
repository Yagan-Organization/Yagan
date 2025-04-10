import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import colors from '@/constants/colors';

interface SelectButtonProps {
    position: number;
}

export default function SelectButton({ position }: SelectButtonProps) {
    const translateX = React.useRef(new Animated.Value(position)).current;

    React.useEffect(() => {
        Animated.spring(translateX, {
            toValue: position,
            useNativeDriver: true,
            tension: 100,
            friction: 10,
        }).start();
    }, [position]);

    return (
        <Animated.View
            style={[
                styles.selectButton,
                { transform: [{ translateX }] },
            ]}
        />
    );
}

const styles = StyleSheet.create({
    selectButton: {
        position: 'absolute',
        top: 15, // Ajustez cette valeur pour aligner verticalement
        width: 50,
        height: 50,
        backgroundColor: colors.red,
        borderRadius: 25,
        zIndex: 1, // Assurez-vous que le bouton est au-dessus des autres éléments
    },
});
