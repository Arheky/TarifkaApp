import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
    },
    image: {
        minHeight: 90,
        width: 100,
        borderRadius: 40,
        resizeMode: 'contain',
    },
    text: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    body_container: {
        flexDirection: 'row',
        margin: 5,
        backgroundColor: '#FBFBFB',
        borderBottomLeftRadius: 40,
        borderTopLeftRadius: 40,
        textAlign: 'center',
        alignItems: 'center',
    },
})