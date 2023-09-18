import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#754cf1",
  },
  image: {
    width: 370,
    height: 400,
    marginTop: 60
  },
  dotImage: {
    position: "absolute",
    top: -40,
    left: 0,
  },
  secContainer: {
    position: "absolute",
    bottom: 50,
    left: "22%",
    justifyContent: "center",
    alignItems: "center",
  },
  secTextView: {
    width: 200
  },
  secText: {
    fontSize: 25,
    color: "#000",
    marginVertical: 10,
    fontWeight: "800",
    textAlign: "center",
  },
  secButton: {
    backgroundColor: "#754cf1",
    borderRadius: 100,
    paddingHorizontal: 20,
    paddingVertical: 7,
  },
  secButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 35
  }
});

export default styles;