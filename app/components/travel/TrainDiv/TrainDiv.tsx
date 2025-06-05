import {View, Text, StyleSheet} from 'react-native';
import {Svg, Path} from 'react-native-svg';
import EVIcon from "@/app/components/travel/TrainDiv/TrainModularIcon/EVIcon";
import RegularIcon from "@/app/components/travel/TrainDiv/TrainModularIcon/RegularIcon";
import SBahnNightIcon from "@/app/components/travel/TrainDiv/TrainModularIcon/SBahnNightIcon";
import ItalicIcon from "@/app/components/travel/TrainDiv/TrainModularIcon/ItalicIcon";
import {colors} from "@/app/constants/colors";


interface TrainDivProps {
  TrainEndPoint: string;
  TrackNumber: string;
  DepartStation: string;
  ArrivalStation: string;
  TrainType: string;
  TrainNumber: string;
}

export default function TrainDiv({ TrainEndPoint, TrackNumber, DepartStation, ArrivalStation, TrainType, TrainNumber }: TrainDivProps) {
    // Function to render the appropriate icon based on train type
    const renderTrainIcon = () => {
        const trainTypePrefix = TrainType.replace(/\d+$/, ''); // Remove numbers from the end

        switch (trainTypePrefix) {
            case 'EV':
                return <EVIcon TrainNumber={TrainNumber} />;
            case 'EC':
            case 'IC':
            case 'IR':
                return <ItalicIcon TrainNumber={TrainNumber} TrainType={trainTypePrefix} />;
            case 'SN':
                return <SBahnNightIcon TrainNumber={TrainNumber} />;
            case 'RE':
            case 'R':
            default:
                return <RegularIcon TrainNumber={TrainNumber} TrainType={trainTypePrefix} />;
        }
    };

    return (
        <View style={styles.Container}>
            <View style={styles.MajorInfo}>
                {renderTrainIcon()}
                <Text style={styles.directionText}>Direction {TrainEndPoint}</Text>
                <Text style={styles.trackText}>Voie {TrackNumber}</Text>
            </View>
            <View>
                {/*Loading Bar to Add, Check the Yagan UI Guidelines for more information*/}
            </View>
            <View style={styles.DepartureArrivalContainerInfo}>
                <View style={styles.stationContainer}>
                    <Text
                        style={styles.stationText}
                        numberOfLines={2}
                    >
                        {DepartStation}
                    </Text>
                </View>
                <View style={styles.arrowContainer}>
                    <Svg width="12" height="11" viewBox="0 0 12 11" fill="none">
                        <Path fill-rule="evenodd" clip-rule="evenodd" d="M6.3909 0.133057L11.3276 5.01222L11.6276 5.30889L11.3276 5.60472L6.39256 10.4847L5.80673 9.89306L10.4417 5.30972L5.80423 0.725557L6.3909 0.133057ZM1.39006 0.133057L6.32756 5.01222L6.62756 5.30889L6.32756 5.60472L1.39256 10.4847L0.805897 9.89306L5.44173 5.30972L0.80423 0.725557L1.39006 0.133057Z" fill={colors.SoftAntharcite}/>
                    </Svg>
                </View>
                <View style={styles.stationContainer}>
                    <Text
                        style={styles.stationText}
                        numberOfLines={2}
                    >
                        {ArrivalStation}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
                width: '100%',
                height: 'auto',
                padding: 16,
                borderRadius: 22,
                backgroundColor: colors.white,
                flexDirection: 'column',
                shadowColor: "rgba(217, 217, 217, 0.2)",
                shadowOffset: {
                                width: -5,
                                height: 5
                },
                gap: 16,
    },
    MajorInfo:{
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        marginBottom: 8,
    },
    DepartureArrivalContainerInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 12,
        width: '100%',
        paddingHorizontal: 4,
    },
    directionText: {
        fontSize: 16,
        fontWeight: "500",
        color: colors.SoftAntharcite,
    },
    trackText: {
        fontSize: 16,
        fontWeight: "400",
        color: colors.SoftAntharcite,
        marginLeft: 'auto',
    },
    stationText: {
        fontSize: 14,
        fontWeight: '500',
        color: colors.SoftAntharcite,
        textAlign: 'center',
        flexShrink: 1,

    },
    stationContainer: {
        width: 'auto',
        alignItems: 'center', // Centre le texte horizontalement

    },
    arrowContainer: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
