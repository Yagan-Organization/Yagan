import { View } from "react-native";
import SearchBar from '@/components/SearchBarDir/SearchBar';

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
       <SearchBar />
    </View>

  );

}
