import {View, Text, StyleSheet} from 'react-native';
import EVIcon from "@/app/components/travel/TrainDiv/TrainModularIcon/EVIcon";
import RegularIcon from "@/app/components/travel/TrainDiv/TrainModularIcon/RegularIcon";
import SBahnNightIcon from "@/app/components/travel/TrainDiv/TrainModularIcon/SBahnNightIcon";
import ItalicIcon from "@/app/components/travel/TrainDiv/TrainModularIcon/ItalicIcon";
import {colors} from "@/app/constants/colors";
import {RegularIconProps} from "@/app/components/travel/TrainDiv/TrainModularIcon/RegularIcon";

export default function TrainDiv ({ TrainEndPoint, TrackNumber }: RegularIconProps) {
    return (
        <View style={styles.Container}>
            <View style={styles.MajorInfo}>
                <RegularIcon
                    TrainNumber="33"
                    TrainType="RE" />


                <Text> Direction {TrainEndPoint}</Text>
                <Text> Voie {TrackNumber}</Text>
            </View>
            <View>
                <Text>

                </Text>
                {/*Loading Bar to Add, Check the Yagan UI Guidelines for more information*/}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
                width: '100%',
                height: 112,
                padding: 16,
                borderRadius: 22,
                backgroundColor: colors.white,
                flexDirection: 'row',
                shadowColor: "rgba(217, 217, 217, 0.2)",

                shadowOffset: {
                                width: -5,
                                height: 5
        },

    },
    Text: {
        fontSize: 14,
        fontWeight: "300",
        color: colors.SoftAntharcite,

    },
    MajorInfo:{
        flexDirection: "row",
        alignItems: "center"
    }

})
