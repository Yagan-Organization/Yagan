import { View } from 'react-native';
import SearchBar from '../components/travel/SearchBar';
import TrainDiv from '../components/travel/TrainDiv/TrainDiv';
export default function Travel() {
    return (
        <View
        style={{
            marginHorizontal: 16,
            marginVertical: 8,
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingBottom: 80, // Add padding for the menu at bottom
        }}
        >
            <SearchBar></SearchBar>
            <TrainDiv
            TrainEndPoint='Saint Maurice'
            TrackNumber='7'
            DepartStation='Lausanne'
            ArrivalStation='Saint Maurice'
            ></TrainDiv>
        </View>
    );
}

