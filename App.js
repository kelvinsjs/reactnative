import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import PageTitle from "./Title";
import Lessons from "./Lessons";
import ModalWindow from "./Modal";

export default function App() {
    return (
        <View style={styles.container} key="47ea5067-ddd0-4bab-ab2b">
            <PageTitle/>
            <Lessons/>
            <ModalWindow/>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 40
    },
});
