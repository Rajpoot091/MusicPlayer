import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  Topcontainer: {
    flex: 1,
    backgroundColor: "lightblue",
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  textStyle: {
    color: "red",
    marginHorizontal: 10,
    fontSize: 24,
    fontWeight: "bold",
  },
  Slider: {
    width: 300,
    height: 40,
  },
  PlayerController: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    // width: "60%",
    paddingHorizontal: 70,
    paddingBottom: 10,
  },
  textArtist: {
    color: "red",
    marginHorizontal: 10,
    fontSize: 15,
    fontWeight: "bold",
    paddingVertical: 10,
  },
  ImageStyle: {
    width: 300,
    height: 400,
    // marginBottom: 20,
    borderRadius: 30,
    marginVertical: 20,
  },
  TimeStyle: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Styles;
