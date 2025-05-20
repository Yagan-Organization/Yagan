import { View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import TravelIcon from './Icon/TravelIcon';
import MyTripsIcon from './Icon/MyTripsIcon';
import DevNotesIcon from './Icon/DevNotesIcon';
import AccountIcon from './Icon/AccountIcon';
import SelectedButton from './Icon/SelectedButton';

export default function Menu() {
    // State to track which button is selected (0: Travel, 1: MyTrips, 2: DevNotes, 3: Account)
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Constants for button sizing and layout
    const BUTTON_WIDTH = 54;
    const BUTTON_GAP = 38; // Approximate gap between buttons when using space-between

    return (
        <View
            style={{
                marginHorizontal: 16,
                marginVertical: 8,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#F5F5F5',
                borderRadius: 64,
                paddingVertical: 12,
                paddingHorizontal: 24,
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                position: 'relative', // Important for absolute positioning of children
            }}
        >
            <SelectedButton position={selectedIndex} buttonWidth={BUTTON_WIDTH} gap={BUTTON_GAP} />

            <TouchableOpacity onPress={() => setSelectedIndex(0)}>
                <TravelIcon />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSelectedIndex(1)}>
                <MyTripsIcon />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSelectedIndex(2)}>
                <DevNotesIcon />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSelectedIndex(3)}>
                <AccountIcon />
            </TouchableOpacity>
        </View>
    );
}
