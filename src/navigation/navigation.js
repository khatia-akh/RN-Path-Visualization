import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/homeScreen";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ title: "Welcome to tadaaa" }}
          name="Home"
          component={HomeScreen}
          options={{
            title: "Choose Your Path",
            headerStyle: {
              backgroundColor: "#0b1607",
              borderBottomRightRadius: 30,
              borderBottomLeftRadius: 30,
              height: 110,
            },
            headerTintColor: "#c7cedf",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
