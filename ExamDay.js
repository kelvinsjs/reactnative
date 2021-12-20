import React from "react";
import {Text, View} from "react-native";
import Styles from "./Styles";
import {
    useFonts,
    Rubik_400Regular,
    Rubik_500Medium,
} from '@expo-google-fonts/rubik';

export default function ExamDay(props) {
    const {exam} = props;
    let [fontsLoaded] = useFonts({
        Rubik_400Regular,
        Rubik_500Medium,
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    } else {
        return (
            <View style={[Styles.forModalText]}>
                <View style={[Styles.forTimeText, {fontFamily: 'Rubik_500Medium'}]}>
                    <Text style={{textAlign:"left", fontFamily: 'Rubik_500Medium'}}>
                        {exam.date}
                    </Text>
                    <Text style={{textAlign: "right", fontFamily: 'Rubik_500Medium'}}>
                        {exam.time}
                    </Text>
                </View>
                <Text style={[Styles.forScheduleText, {textAlign: "right"}]}>
                    {exam.lesson}
                </Text>
            </View>
        )
    }
}