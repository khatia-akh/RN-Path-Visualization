import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

import PathItems from "../components/pathItems";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Choose your path</Text> */}
      <PathItems
        children={"go to path 1"}
        onPress={() => {
          navigation.navigate("MapViewScreen");
        }}
      />
      <PathItems children={"go to path 2"} />
      <PathItems children={"go to path 3"} />
      <PathItems children={"go to path 4"} />
      <PathItems children={"go to path 5"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0c2c0",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 25,
  },
  title: {
    color: "#007a79",
    fontSize: 18,
    marginVertical: 25,
  },
});

export default HomeScreen;
