import { View } from "react-native";
import {ScrollView} from "react-native";
import Menu from '@/components/MenuComponents/Menu';
import SearchBar from "@/components/SearchBar/SearchBar";
import * as React from "react";
import Train from "@/components/TrainComponents/train";

export default function ScreenTravel() {
  return (
    <View
      style={{
        marginBottom: 40,
        flex: 1,
        flexDirection: 'column',
        justifyContent: "space-between",
        alignItems: "center",
          gap: 20,
      }}
    >
        <View>
        <SearchBar />
    </View>
   <ScrollView
     style={{ width: '100%', }}
     contentContainerStyle={{
       alignItems: 'center',
         gap: 10,

     }}
   >
       <Train/>
       <Train/>
       <Train/>
       <Train/>
       <Train/>
       <Train/>
       <Train/>
   </ScrollView>

        <Menu />
    </View>
  );
}

