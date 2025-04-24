import { View,  } from 'react-native'
import colors from '@/constants/colors'
import { Svg, Circle } from 'react-native-svg'


export default function PositionLine(){
    return (
        <View style={{
            margin: 0,
            justifyContent: 'center',
            alignItems: 'center',


        }}>

                <Svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <Circle cx="8.60156" cy="8.42969" r="7.5" stroke="#008CFF"/>
                    <Circle cx="8.60153" cy="8.4299" r="4.1926" stroke="#008CFF" stroke-width="0.75"/>
                </Svg>



            <View style={{
                height: 50,
                width: 2,

                backgroundColor: colors.SoftAnthracite,

            }}
            >

            </View>

                <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <Circle cx="8" cy="8" r="7.5" stroke="black"/>
                </Svg>


        </View>

    )
}


