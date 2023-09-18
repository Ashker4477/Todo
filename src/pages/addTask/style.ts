import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // Arrange the inputs horizontally
        justifyContent: 'space-between', // Create space between inputs
        marginTop: 15,
    },
    inputContainer: {
        flex: 1, // Allow inputs to share the available space equally
    },
    dot: {
        position: "absolute",
        transform: [{ rotate: '90deg' }],
        right: 0,
        top: -25,
    },
    bg: {
        backgroundColor: "#eecf2",
        flex: 1,
    },
    pencil: {
        backgroundColor: "#eecf2",
        justifyContent: "center",
        alignItems: "center"
    },
    mT15: { marginTop: 15 },
    mH24: { marginHorizontal: 24 },
    buttonContainer: {
        marginTop: 25,
    },
});

export default styles;