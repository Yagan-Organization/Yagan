import { View,  } from 'react-native'
import colors from '@/constants/colors'


export default function PositionLine(){
    return (
        <View style={{
            margin: 0,
            justifyContent: 'center',
            alignItems: 'center',


        }}>
            <View  id='point1' style={{
                width: 15,
                height: 15,
                backgroundColor: 'blue',
                borderRadius: 10,
            }}>

            </View>
            <View style={{
                height: 50,
                width: 4,

                backgroundColor: colors.SoftAnthracite,

            }}
            >

            </View>
            <View id='point2'
                  style={{
                width: 15,
                height: 15,
                backgroundColor: 'blue',
                borderRadius: 10,
            }}>


            </View>
        </View>

    )
}

// var p1 = point1.position;
// var p2 = point2.position;

//function SizeLine (){
//    p1
// }
