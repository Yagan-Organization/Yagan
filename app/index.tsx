import { View } from "react-native";
import Menu from '@/components/MenuComponents/Menu';

export default function Index() {
  return (
    <View
      style={{
        marginBottom: 40,
        flex: 1,
        flexDirection: 'column-reverse',
        justifyContent: "space-between",
        alignItems: "center",

      }}
    >
       <Menu />
    </View>

  );

}
