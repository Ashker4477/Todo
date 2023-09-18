import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#eeecf2",
    },
    heading: {
      fontSize: 30,
      fontWeight: "bold",
      color: "#000",
    },
    headingContainer: {
      height: 120,
      justifyContent: "center",
      paddingHorizontal: 30,
      marginTop: 30
    },
    img: {
      position: "absolute",
      left: -30,
      top: -45,
    },
    listContainer: {
      paddingHorizontal: 30,
    },
    card: {
      height: 120,
      backgroundColor: "#fff",
      marginTop: 10,
      borderRadius: 15,
      borderColor: "#fefefe",
      borderWidth: 2,
      padding: 15,
    },
    cardHead: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#000",
      marginBottom: 5
    },
    cardText: {
      fontSize: 13,
    },
    row: { flexDirection: 'row' },
    rowEnd: {
      flexDirection: 'row',
      justifyContent: "space-between",
      marginVertical: 10
    },
    time: {
      color: '#9477eb',
    },
    timeImage: { width: 15, marginRight: 5 },
    done: {
      backgroundColor: "#d3f5ca",
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 15
    },
    inProgress: {
      backgroundColor: '#f6ceb5',
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 12
    },
    inProgressText: {
      color: '#e0895c',
    }
  });

  export default styles;