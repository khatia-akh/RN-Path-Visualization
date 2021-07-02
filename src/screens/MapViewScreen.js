import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Share,
} from "react-native";
import MapView, { Polyline, Marker } from "react-native-maps";
import RightArrow from "../../assets/icons/share-icon.jpeg";

const MapViewScreen = ({ navigation, route }) => {
  const { Data } = route.params;
  console.log("route data====>", Data);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconCont} onPress={onShare}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={RightArrow}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: Data?.LATITUDE,
          longitude: Data?.LONGITUDE_DEG,

          // latitude: 37.78825,
          // longitude: -122.4324,
          // latitudeDelta: 0.0922,
          // longitudeDelta: 0.0421,
        }}
        coordinates={[
          { latitude: Data?.LATITUDE_DEG, longitude: Data?.LONGITUDE_DEG },
          { latitude: Data?.LATITUDE, longitude: Data?.LONGITUDE_DEG },
        ]}
      >
        <Marker
          onPress={() => {
            console.logI("onPress coordinate", coordinate);
          }}
        >
          <View style={{ backgroundColor: "red", padding: 10 }}>
            <Text>SF</Text>
          </View>
        </Marker>
        <Polyline
          coordinates={[
            // { latitude: 37.8025259, longitude: -122.4351431 },
            // { latitude: 37.7896386, longitude: -122.421646 },
            // { latitude: 37.7665248, longitude: -122.4161628 },
            // { latitude: 37.7734153, longitude: -122.4577787 },
            { latitude: 37.7948605, longitude: -122.4596065 },
            { latitude: Data?.LATITUDE_DEG, longitude: Data?.LONGITUDE_DEG },
            { latitude: Data?.LATITUDE, longitude: Data?.LONGITUDE_DEG },
          ]}
          strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={[
            "#7F0000",
            "#00000000", // no color, creates a "long" gradient between the previous and next coordinate
            "#B24112",
            "#E5845C",
            "#238C23",
            "#7F0000",
          ]}
          strokeWidth={6}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  iconCont: {
    width: 65,
    height: 55,
    position: "absolute",
    bottom: 60,
    right: 20,
    zIndex: 100,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#000",
  },
});

export default MapViewScreen;
