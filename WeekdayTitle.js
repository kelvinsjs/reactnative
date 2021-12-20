import React from "react";
import {Text} from "react-native";
import Styles from "./Styles";
import {
    useFonts,
    Rubik_500Medium,
} from '@expo-google-fonts/rubik';

export default function WeekdayTitle(props) {
    const {day} = props;
    let [fontsLoaded] = useFonts({
        Rubik_500Medium
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    } else {
        return (
            <Text style={[Styles.forName, {fontFamily: 'Rubik_500Medium',}]} key={day.id + "id"}>
                {day.weekday}
            </Text>
        )
    }
}