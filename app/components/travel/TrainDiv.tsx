import { View } from 'react-native';
import { Svg, Line, Circle } from 'react-native-svg';

export default function TrainDiv() {
  return (
    <View
      style={{
          flex: 1,
            maxHeight: 120,
            backgroundColor: 'white',
          borderWidth: 1,
          borderColor: 'black',
            borderRadius: 20,
          padding: 16,
      }}
    >
        <Svg width="400" height="17" viewBox="0 0 305 17" fill="none">
            <Line x1="400" y1="10" x2="16.6019" y2="8.10352" stroke="black"/>
            <Circle cx="8.60156" cy="8.57007" r="7.5" stroke="black"/>
            <Circle cx="8.60156" cy="8.57007" r="8" fill="#EB0000"/>
            <Circle cx="296.344" cy="8.57007" r="8" fill="black"/>
        </Svg>
    </View>
  );

}
