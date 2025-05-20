import React from 'react';
import { Line, Circle, Svg } from 'react-native-svg';

/**
 * Renders a static SVG graphic with a vertical line and three circles for use in React Native.
 *
 * The SVG includes a vertical black line, two concentric blue circles near the top, and a single black circle near the bottom.
 *
 * @returns An SVG element representing the position line graphic.
 */
export default function PositionLine() {
    return(
        <Svg width="17" height="100" viewBox="0 0 17 81" fill="none" >
            <Line x1="8.6875" y1="15.7095" x2="8.6875" y2="61.6771" stroke="black"/>
            <Circle cx="8.63867" cy="8.42969" r="7.5" stroke="#008CFF"/>
            <Circle cx="8.63889" cy="8.4299" r="4.1926" stroke="#008CFF" stroke-width="0.75"/>
            <Circle cx="8.63867" cy="70.1055" r="7.5" stroke="black"/>
        </Svg>

    )

};

