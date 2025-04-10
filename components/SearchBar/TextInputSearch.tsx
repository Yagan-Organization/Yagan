import { View, TextInput } from 'react-native';
import SearchBarLine from "@/components/SearchBar/SearchBarLine";


export default function SearchBar() {
    return (
        <View style={{

            marginTop: 10,
            borderRadius: 20,
            width: 400,
            height: 140,
            flexDirection: "column",
            backgroundColor: 'none',
            paddingLeft: 20,
            paddingRight: 20,
            justifyContent: 'center',

        }}>
            <TextInput
                placeholder="Gare de départ"
                keyboardType="numeric"
                style={{
                    marginLeft: 0,
                    margin: 10,
                    fontSize: 18,
                }}
            />
            <SearchBarLine></SearchBarLine>
            <TextInput
                placeholder="Gare d'arrivée"
                keyboardType="numeric"
                style={{
                    marginLeft: 0,
                    margin: 10,
                    fontSize: 18,
                }}
            />
        </View>
    )
}
