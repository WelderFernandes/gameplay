import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Signin } from "../screens/Signin";
import { Home } from "../screens/Home";
import { AppointmentDetails } from "../screens/AppointmentDetails";
import { theme } from "../global/styles/theme";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100,
        },
      }}
    >
      <Screen name="SignIn" component={Signin} />
      <Screen name="Home" component={Home} />
      <Screen name="AppointmentDetails" component={AppointmentDetails} />
    </Navigator>
  );
}
