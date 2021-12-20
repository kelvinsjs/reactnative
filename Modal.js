import React, {Component} from "react";
import {Text, View, Dimensions, TouchableOpacity, Modal} from "react-native";
import Styles from "./Styles";
import * as Font from 'expo-font';
import ExamDay from "./ExamDay";

let customFonts = {
    'Rubik': require('./assets/fonts/Rubik-Regular.ttf'),
};

let width = Dimensions.get('window').width;

export default class ModalWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {data: {}, isFetching: true, error: null, isVisible: false, fontsLoaded: false};
    }

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({fontsLoaded: true});
    }

    displayModal(show) {
        this.setState({isVisible: show})
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/kelvinsjs/lessons-database/main/exams.json')
            .then(response => response.json())
            .then(result => this.setState({data: result, isFetching: false}));
        this._loadFontsAsync();
    }

    render() {
        const {data, isFetching} = this.state;
        let examsNow = data.examsNow === "yes" && <Text style={Styles.forModalOpener}>Розклад cессій</Text>
        let examsIs = [];
        let examList = [];
        if (isFetching === false) {
            examsIs = data.exams;
            for (let i = 0; i < examsIs.length; i++) {
                examList.push(<ExamDay exam={examsIs[i]} key={examsIs[i].id}/>)
            }
        }

        if (this.state.fontsLoaded) {
            return (
                <View style={{position: "absolute", bottom: 0, right: 0}}>
                    <Modal
                        animationType={"slide"}
                        transparent={false}
                        visible={this.state.isVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has now been closed.');
                        }}
                    style={{flex: 1, paddingTop: 50, paddingLeft: width/0.1, paddingRight: width/0.1}}
                        key="33ec-443ba942-80106d10bf83"
                    >
                        <View style={Styles.forModalWindow}>
                            {examList}
                            <TouchableOpacity onPress={() => {
                                this.displayModal(false)
                            }} style={Styles.forCloseButton}>
                                <Text style={
                                    {color: "white", textAlign: "center", fontFamily: "Rubik"}
                                }>Вернуться к расписанию</Text>
                            </TouchableOpacity>

                        </View>
                    </Modal>
                    <TouchableOpacity
                        style={[{
                            fontFamily: 'Rubik',
                            flex: 1,
                        }, Styles.forModalView]}
                        onPress={() => {
                            this.displayModal(true);
                        }}>
                        {examsNow}
                    </TouchableOpacity>
                </View>
            )
        } else {
            return <Text>Loading...</Text>
        }

    }
}