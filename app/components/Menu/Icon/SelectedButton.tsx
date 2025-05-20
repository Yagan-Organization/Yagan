import { View, Animated } from 'react-native';
import { useEffect, useRef } from 'react';

interface SelectedButtonProps {
  position?: number;
  buttonWidth?: number;
  gap?: number;
}

export default function SelectedButton({ position = 0, buttonWidth = 52, gap = 0 }: SelectedButtonProps) {
  const translateX = useRef(new Animated.Value(position * (buttonWidth + gap))).current;

  useEffect(() => {
    Animated.spring(translateX, {
      toValue: position * (buttonWidth + gap),
      friction: 7,
      tension: 50,
      useNativeDriver: true,
    }).start();
  }, [position, buttonWidth, gap, translateX]);

  return (
    <Animated.View
      style={{
        position: 'absolute',
        top: 8,
        left: 24, // Matching the paddingHorizontal of the parent View
        backgroundColor: '#eb0c08',
        width: buttonWidth,
        height: buttonWidth,
        borderRadius: buttonWidth / 2,
        transform: [{ translateX }],
      }}
    />
  );
}
