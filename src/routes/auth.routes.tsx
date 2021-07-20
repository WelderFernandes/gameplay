import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Signin } from "../screens/Signin";
import { Home } from "../screens/Home";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: "transparent",
        },
      }}
    >
      <Screen name="SignIn" component={Signin} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
