import React, {Component} from "react";
import {ScrollView} from "react-native";
import WeekdayTitle from "./WeekdayTitle";
import LessonBlock from "./LessonBlock";

export default class Lessons extends Component {
    constructor(props) {
        super(props);
        this.state = {data: {}, isFetching: true, error: null};
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/kelvinsjs/lessons-database/main/db.json')
            .then(response => response.json())
            .then(result => this.setState({data: result, isFetching: false}));
    }

    render() {
        const {data, isFetching} = this.state;
        const MondayLessons = [];
        const noPair = {
            "id": "ad1f576d-4a6b-450d-92f0-b5052843da64",
            "name": "У цей день пар немає",
            "number": "1",
            "startTime": "Пар",
            "endTime": "Немає",
            "aval": "always"
        };

        let todaydate = new Date();
        let oneJan =  new Date(todaydate.getFullYear(), 0, 1);
        let numberOfDays =  Math.floor((todaydate - oneJan) / (24 * 60 * 60 * 1000));
        let result = Math.ceil(( todaydate.getDay() + 1 + numberOfDays) / 7);
        const weekNumber = result;
        let typeOfWeek = weekNumber % 2 === 0 ? "even" : "odd";
        for (let k = 0; k < data.length; k++) {
            MondayLessons.push(<WeekdayTitle day={data[k]} key={data[k].id}/>)
            if (data[k].lessons.length === 0) {
                MondayLessons.push(<LessonBlock filler={noPair} key={noPair.id + k}/>)
            } else {
                for (let i = 0; i < data[k].lessons.length; i++) {
                    if (data[k].lessons[i].aval === "always" || data[k].lessons[i].aval === typeOfWeek) {
                        MondayLessons.push(<LessonBlock filler={data[k].lessons[i]} key={data[k].lessons[i].id}/>)
                    } else {
                        continue;
                    }
                }
            }
        }

        return (
            <ScrollView>
                {MondayLessons}
            </ScrollView>
        );
    }

}