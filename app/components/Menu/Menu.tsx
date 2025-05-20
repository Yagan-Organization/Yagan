import { View, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'expo-router';
import TravelIcon from './Icon/TravelIcon';
import MyTripsIcon from './Icon/MyTripsIcon';
import DevNotesIcon from './Icon/DevNotesIcon';
import AccountIcon from './Icon/AccountIcon';
import SelectedButton from './Icon/SelectedButton';

/**
 * Renders a horizontal menu with four selectable icon buttons for navigation.
 *
 * Displays Travel, MyTrips, DevNotes, and Account icons as interactive buttons. Highlights the currently selected button and updates the selection when a button is pressed.
 */
export default function Menu() {
    const router = useRouter();
    const pathname = usePathname();
    
    // State to track which button is selected (0: Travel, 1: MyTrips, 2: DevNotes, 3: Account)
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Constants for button sizing and layout
    const BUTTON_WIDTH = 50;
    const BUTTON_GAP = 40; // Approximate gap between buttons when using space-between

    // Update selected index based on current route
    useEffect(() => {
        if (pathname === '/' || pathname === '/(tabs)/' || pathname === '/(tabs)/index') {
            setSelectedIndex(0);
        } else if (pathname === '/(tabs)/my-trips') {
            setSelectedIndex(1);
        } else if (pathname === '/(tabs)/dev-notes') {
            setSelectedIndex(2);
        } else if (pathname === '/(tabs)/account') {
            setSelectedIndex(3);
        }
    }, [pathname]);

    // Navigation functions
    const navigateToTravel = () => {
        setSelectedIndex(0);
        router.replace('/(tabs)/');
    };

    const navigateToMyTrips = () => {
        setSelectedIndex(1);
        router.replace('/(tabs)/my-trips');
    };

    const navigateToDevNotes = () => {
        setSelectedIndex(2);
        router.replace('/(tabs)/dev-notes');
    };

    const navigateToAccount = () => {
        setSelectedIndex(3);
        router.replace('/(tabs)/account');
    };

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

            <TouchableOpacity onPress={navigateToTravel}>
                <TravelIcon />
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateToMyTrips}>
                <MyTripsIcon />
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateToDevNotes}>
                <DevNotesIcon />
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateToAccount}>
                <AccountIcon />
            </TouchableOpacity>
        </View>
    );
}
