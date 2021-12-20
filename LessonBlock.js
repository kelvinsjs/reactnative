import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Styles from "./Styles";
import {
    useFonts,
    Rubik_400Regular,
} from '@expo-google-fonts/rubik';

export default function LessonBlock(props) {
    const {filler} = props;
    let [fontsLoaded] = useFonts({
        Rubik_400Regular
    });

    let rand = (min, max) => Math.floor(Math.random() * max) + min;
    const Colors = "#8cdafe #8cdafe #bef2cc #fdda9a #fedb9b #abfdf1 #00ad99 #fff0ab #fea7b0".split("\n").join(" ").split(" ");
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    } else {
        return (
            <View style={[Styles.forLessonBlock, {fontFamily: 'Rubik_400Regular',}]} key={filler.id + "another"}>
                <View style={Styles.forLeftSide}>
                    <Text>
                        {filler.startTime}
                    </Text>
                    <Text>
                        {filler.endTime}
                    </Text>
                </View>
                <View style={[Styles.forRightSide, {backgroundColor: Colors[rand(1,8)]}]}>
<Text style={{textAlignVertical: "center",textAlign: "center"}}>{filler.name}</Text>
                </View>
            </View>
        )
    }
}

