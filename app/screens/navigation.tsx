import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderButton, Text } from '@react-navigation/elements';
import {
    createStaticNavigation,
    StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import Account from '@/assets/images/icoMenu/account';
import devnote from '@/assets/images/icoMenu/devnote';
import mytrip from '@/assets/images/icoMenu/mytrip';
import travel from '@/assets/images/icoMenu/travel';
import ScreenMyTrips from "@/app/screens/main_screens/ScreenMyTrips";
import ScreenTravel from "@/app/screens/main_screens/ScreenTravel";
import Svg from "react-native-svg";

const HomeTabs = createBottomTabNavigator({
    screens: {
        Home: {
            screen: ScreenTravel,
            options: {
                title: 'Feed',
                tabBarIcon: ({ color, size }) => (
                    <Svg
                    source = {travel}
                    />
                ),
            },
        },
        Updates: {
            screen: ,
            options: {
                tabBarIcon: ({ color, size }) => (
                    <Image
                        source={bell}
                        tintColor={color}
                        style={{
                            width: size,
                            height: size,
                        }}
                    />
                ),
            },
        },
    },
});

const RootStack = createNativeStackNavigator({
    screens: {
        HomeTabs: {
            screen: HomeTabs,
            options: {
                title: 'Home',
                headerShown: false,
            },
        },
        Profile: {
            screen: Profile,
            linking: {
                path: ':user(@[a-zA-Z0-9-_]+)',
                parse: {
                    user: (value) => value.replace(/^@/, ''),
                },
                stringify: {
                    user: (value) => `@${value}`,
                },
            },
        },
        Settings: {
            screen: Settings,
            options: ({ navigation }) => ({
                presentation: 'modal',
                headerRight: () => (
                    <HeaderButton onPress={navigation.goBack}>
                        <Text>Close</Text>
                    </HeaderButton>
                ),
            }),
        },
        NotFound: {
            screen: NotFound,
            options: {
                title: '404',
            },
            linking: {
                path: '*',
            },
        },
    },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}
