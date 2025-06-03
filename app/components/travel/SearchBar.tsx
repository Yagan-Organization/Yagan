import {View, TextInput } from 'react-native';
import { colors } from '../../constants/colors';
import PositionLine from './PositionLine';

/**
 * Displays a search bar with input fields for selecting departure and arrival stations.
 *
 * The component features a visual indicator between the two station inputs and applies custom styling for a modern, elevated appearance.
 */
export default function SearchBar() {
    return (
        // Main container wrapping the entire search interface
        <View
            style={{
                display: 'flex',
                borderRadius: 22,
                flexDirection: 'row',
                backgroundColor: colors.white,
                paddingHorizontal: 16,
                paddingVertical: 12,
                margin: 0,
                shadowColor: "rgba(217, 217, 217, 0.5)",

                shadowOffset: {
                    width: 10,
                    height: 10
                },
                shadowRadius: 10,
                elevation: 10,
                shadowOpacity: 1,

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

                        width: 350,
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

