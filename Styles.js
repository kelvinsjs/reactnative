import {StyleSheet, Dimensions} from "react-native";

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

const Styles = StyleSheet.create({
    forTitle: {
        textAlign: 'center',
        fontSize: 17,
        width: width,
        marginBottom: 30
    },
    forName: {
        width: width,
        backgroundColor: "#f3f6fb",
        fontSize: 16,
        padding: 5,
        textAlign: "center",
        marginBottom: 20,
        color: "#989baa",
        fontWeight: "600"
    },
    forLessonBlock: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        width: width,
        marginBottom: 5,
        borderBottomWidth: 2,
        borderBottomColor: "#f3f3f3"
    },
    forLeftSide: {
        flex: 0.2,
        flexDirection: "column",
        alignItems: "center",
        fontSize: 10
    },
    forRightSide: {
        flex: 0.75,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 16,
        height: 70,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    forWeekdayLessons: {
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        width: width
    },
    forWeekdayBlock: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 20,
        maxWidth: "100vw",
    },
    forModalOpener: {
        flex: 1,
        bottom: 0,
        justifyContent: "flex-end",
        fontSize: 16,
        color: "#072f5f",
        paddingTop: 12,
        paddingHorizontal: 25,
        alignItems: "center"
    },
    forModalWindow: {
        paddingTop: height * 0.2,
        paddingLeft: width / 10,
        height: 300
    },
    forModalText: {
        flex: 1,
        paddingRight: width/10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 40
    },
    forTimeText: {
        flex: 0.3,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center"
    },
    forScheduleText: {
flex: 0.7
    },
    forModalView: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 3,
        position: 'absolute',
        bottom: 20,
        height: 50,
        backgroundColor: "white",
        right: 0,
        borderTopLeftRadius: 35,
        borderBottomLeftRadius: 35,
    },
    forCloseButton: {
        width: width * 0.8,
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: "center",
        backgroundColor: "#072f5f",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    }
})

export default Styles;