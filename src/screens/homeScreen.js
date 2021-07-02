import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import DataPath1 from "../../data/path1";
import PathItems from "../components/pathItems";

const HomeScreen = ({ navigation }) => {
  const Dataset = DataPath1.Sheet1;
  return (
    <View style={styles.container}>
      <PathItems
        children={"go to path 1"}
        onPress={() => {
          navigation.navigate("MapViewScreen", { Data: Dataset[0] });
        }}
      />
      <PathItems
        children={"go to path 2"}
        onPress={() => {
          navigation.navigate("MapViewScreen", { Data: Dataset[6] });
        }}
      />
      <PathItems
        children={"go to path 3"}
        onPress={() => {
          navigation.navigate("MapViewScreen", { Data: Dataset[28] });
        }}
      />
      <PathItems
        children={"go to path 4"}
        onPress={() => {
          navigation.navigate("MapViewScreen", { Data: Dataset[23] });
        }}
      />
      <PathItems
        children={"go to path 5"}
        onPress={() => {
          navigation.navigate("MapViewScreen", { Data: Dataset[14] });
        }}
      />
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
