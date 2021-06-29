import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import RightArrow from "../../assets/icons/RightArrow.png";

const PathItems = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
      <View style={styles.iconCont}>
        {/* <Image
          style={{ flexDirection: 1, width: "100%", height: "100%" }}
          src={{ uri: RightArrow }}
        /> */}
        <Image
          style={{ width: "100%", height: "100%" }}
          source={RightArrow}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "100%",
    backgroundColor: "#002a29",
    // alignItems: "center",
    marginVertical: 5,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    color: "#c7cedf",
    fontSize: 20,
  },
  iconCont: {
    width: 60,
    height: 55,
    // backgroundColor: "#c7cedf",
  },
});

export default PathItems;
