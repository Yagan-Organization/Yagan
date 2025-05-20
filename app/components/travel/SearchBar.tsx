import {View, TextInput } from 'react-native';
import { colors } from '../../constants/colors';
import PositionLine from './PositionLine';

// Main SearchBar component for handling station search inputs
export default function SearchBar() {
    return (
        // Main container wrapping the entire search interface
        <View
            style={{
                borderColor: 'black',
                borderWidth: 0.8,
                display: 'flex',
                borderRadius: 20,
                flexDirection: 'row',
                backgroundColor: colors.white,
                paddingHorizontal: 16,
                paddingVertical: 12,
                margin: 0,
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
            }}
        >
            {/* Left container for the position indicator */}
            <View
            style={{
                marginRight: 8,
            }}
            >
                {/* Visual indicator showing the connection between departure and arrival */}
                <PositionLine></PositionLine>
            </View>

            {/* Container for input fields */}
            <View>
                {/* Departure station input field */}
                <TextInput placeholder={'Gare de départ'}
                           style={{
                               marginTop: 8,
                                fontSize: 18,
                           }}>

                </TextInput>
                {/* Separator line between departure and arrival inputs */}
                <View
                    style={{

                        width: 300,
                        marginVertical: 22,
                        backgroundColor: 'black',
                        height: 1,


                    }}>


                </View>
                {/* Arrival station input field */}
                <TextInput placeholder={"Gare d'arrivée"}
                style={{
                    fontSize: 18,
                }}
                ></TextInput>
            </View>



        </View>
    );
}

