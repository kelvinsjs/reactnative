import React, {Component} from "react";
import {Text, View} from "react-native";
import * as Font from 'expo-font';

let customFonts = {
    'Rubik': require('./assets/fonts/Rubik-Bold.ttf'),
};
import Styles from "./Styles";


export default class PageTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {data: {}, isFetching: true, error: null, fontsLoaded: false};
        this._isMounted = false;
    }

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({fontsLoaded: true});
    }

    componentDidMount() {
        this._isMounted = true;
        fetch('https://raw.githubusercontent.com/kelvinsjs/lessons-database/main/course.json')
            .then(response => response.json())
            .then(result => {
                if(this._isMounted) {
                    this.setState({data: result, isFetching: false});
                }
            });
        this._loadFontsAsync();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const {data, isFetching} = this.state;
        const titleText = data.number;
        if (this.state.fontsLoaded) {
            if (isFetching === false) {
                return (
                    <View>
                        <Text style={[Styles.forTitle, {fontFamily: "Rubik",}]}>
                            Розклад занять {titleText} курсу ІГ ГІС
                        </Text>
                    </View>
                )
            } else {
                return <Text>Loading...</Text>
            }
        } else {
            return <Text>Loading...</Text>
        }
    }
}

