import { View, Animated } from 'react-native';
import { useEffect, useRef } from 'react';

interface SelectedButtonProps {
  position?: number;
  buttonWidth?: number;
  gap?: number;
}

/**
 * Renders an animated circular indicator that smoothly slides horizontally based on the selected position.
 *
 * The indicator's size and spacing can be customized via props. Its horizontal movement is animated using a spring transition whenever the position, button width, or gap changes.
 *
 * @param position - The index of the selected button to indicate. Defaults to 0.
 * @param buttonWidth - The diameter of the circular indicator in pixels. Defaults to 52.
 * @param gap - The horizontal space between buttons in pixels. Defaults to 0.
 */
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
