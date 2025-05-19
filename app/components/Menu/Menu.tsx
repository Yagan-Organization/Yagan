import { View } from 'react-native'
import TravelIcon from './Icon/TravelIcon'
import MyTripsIcon from "./Icon/MyTripsIcon";
import DevNotesIcon from './Icon/DevNotesIcon'
import AccountIcon from './Icon/AccountIcon'
export default function() {
    return (
        <View>
            <TravelIcon/>
            <MyTripsIcon/>
            <DevNotesIcon/>
            <AccountIcon/>
        </View>
    )
}
