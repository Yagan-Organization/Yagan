import React from 'react';
import { Animated } from 'react-native';
import colors from '@/constants/colors';

interface SelectButtonProps {
    position: number;
}

export default function SelectButton({ position }: SelectButtonProps) {
    const translateX = new Animated.Value(position);

    React.useEffect(() => {
        Animated.spring(translateX, {
            toValue: position,
            useNativeDriver: true,
            tension: 100,
            friction: 10
        }).start();
    }, [position]);

    return (
        <Animated.View
            style={{
                position: 'absolute',
                left: 20,
                width: 50,
                height: 50,
                backgroundColor: colors.background,
                borderRadius: 25,
                transform: [{ translateX }],
            }}
        />
    );
}
