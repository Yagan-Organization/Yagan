import React from 'react';
import { View, Text, Image } from 'react-native';
import Svg, { Rect , Path, Line, Circle, ClipPath, G, Defs} from 'react-native-svg';

function TrainLine() {
    return (
        <View>
            <Svg width="400" height="17" viewBox="0 0 304 17" fill="none">
                <Line x1="330" y1="8.30322" x2="-30" y2="8.30322" stroke="black"/>
                <Circle cx="-25" cy="8.77002" r="8" stroke="black" fill="white"/>
                <Circle cx="330" cy="8.77002" r="8" fill="black"/>
            </Svg>

        </View>
    )
}

export default function ViewTrain(){
        return(<View style={{
                display: 'flex',
            flexDirection: 'column',
                padding: 10,
                justifyContent: 'space-between',
                alignItems: 'center',
            width: '92%',
            height: 120,
            backgroundColor: 'white',
            borderRadius: 25,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 5,
                paddingHorizontal: 15,
                paddingVertical: 5,


        }}

        >
                <View
                style={{
                    gap: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignSelf: 'flex-start',
                    alignItems: 'center',
                }}
                >

                    <View
                    style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        gap: 8,
                    }}
                    >
                    <Svg width="22" height="21" viewBox="0 0 22 21" fill="none">
                        <G clip-path="url(#clip0_518_1447)">
                            <Rect x="0.0986328" y="0.743164" width="24.4414" height="24.4414" fill="#0009FF"/>
                            <Path fill-rule="evenodd" clip-rule="evenodd" d="M9.29004 3.15918L9.53241 3.31335L12.1574 4.98001L12.7034 5.32668L12.1574 5.67335L10.7355 6.57585H12.79C14.5847 6.57668 16.1089 7.61001 16.7827 9.07668C16.8287 9.17779 16.8707 9.28057 16.9087 9.38501L18.7409 14.1958C18.8468 14.4067 18.915 14.6483 18.915 14.9092C18.915 15.3512 18.7307 15.7751 18.4025 16.0877C18.0743 16.4003 17.6292 16.5758 17.165 16.5758H15.3713C15.3057 16.8842 15.1683 17.1675 14.9775 17.4092H19.79V18.2425H2.29004V17.4092H3.60254C3.40815 17.1626 3.27367 16.878 3.20879 16.5758H2.29004V15.7425H17.165C17.3971 15.7425 17.6197 15.6547 17.7838 15.4984C17.9479 15.3422 18.04 15.1302 18.04 14.9092C18.0383 14.782 18.0059 14.6568 17.9455 14.5433L17.935 14.5225L17.9263 14.5008L17.4477 13.2425H11.915V9.07668H15.8035C15.1998 8.08001 14.0798 7.41001 12.79 7.41001H2.29004V6.57668H7.84454L6.42266 5.67251L5.87666 5.32668L6.42266 4.98001L9.04766 3.31335L9.29004 3.15918ZM16.178 9.91001H12.79V12.41H17.13L16.178 9.91001ZM11.0838 16.5767C11.1494 16.8842 11.2868 17.1675 11.4775 17.41H7.10254C7.29329 17.1675 7.43066 16.8842 7.49629 16.5767H11.0838ZM4.11441 16.5767H6.59066C6.49967 16.8201 6.33182 17.0307 6.11015 17.1796C5.88847 17.3286 5.62383 17.4085 5.35254 17.4085C5.08125 17.4085 4.81661 17.3286 4.59493 17.1796C4.37325 17.0307 4.2054 16.8201 4.11441 16.5767ZM11.9894 16.5767C12.0804 16.8201 12.2483 17.0307 12.4699 17.1796C12.6916 17.3286 12.9563 17.4085 13.2275 17.4085C13.4988 17.4085 13.7635 17.3286 13.9851 17.1796C14.2068 17.0307 14.3747 16.8201 14.4657 16.5767H11.9894ZM9.29004 6.49168L11.1267 5.32501L9.29004 4.16168L7.45341 5.32668L9.29004 6.49168ZM6.66504 9.07501H11.04V13.2417H6.66504V9.07501ZM7.54004 9.90835V12.4083H10.165V9.90835H7.54004ZM2.29004 9.90835H4.91504V12.4083H2.29004V13.2417H5.79004V9.07501H2.29004V9.90835Z" fill="white"/>
                        </G>
                        <Defs>
                            <ClipPath id="clip0_518_1447">
                                <Rect width="21" height="20" fill="white" transform="translate(0.540039 0.743164)"/>
                            </ClipPath>
                        </Defs>
                    </Svg>

                    <Image
                        source={require('@/assets/images/TrainIcon/IC60.png')}
                        style={{
                            width: 60,
                            height: 60,
                            resizeMode: 'contain'
                        }}
                    ></Image>
                    </View>
                    <Text> Direction Saint Maurice</Text>
                </View>
            <TrainLine></TrainLine>
                <View
                style={{
                    margin: 5,
                display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                }}>
                    <Text> Lausanne Gare</Text>
                    {/* Svg Arrow*/}
                    <Svg width="12" height="11" viewBox="0 0 12 11" fill="none" >
                        <Path fill-rule="evenodd" clip-rule="evenodd" d="M6.39126 0.0756836L11.3279 4.95485L11.6279 5.25152L11.3279 5.54735L6.39293 10.4274L5.8071 9.83568L10.4421 5.25235L5.8046 0.668184L6.39126 0.0756836ZM1.39043 0.0756836L6.32793 4.95485L6.62793 5.25152L6.32793 5.54735L1.39293 10.4274L0.806263 9.83568L5.4421 5.25235L0.804596 0.668184L1.39043 0.0756836Z" fill="black"/>
                    </Svg>


                    <Text> Vvevy Gare</Text>

                </View>
        </View>
        )
}


