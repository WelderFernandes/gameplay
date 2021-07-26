import React from "react";
import { useFonts } from "expo-font";
import {
  Inter_400Regular as InterRegular,
  Inter_500Medium as InterMedium,
} from "@expo-google-fonts/inter";
import {
  Rajdhani_700Bold as RajdhaniBold,
  Rajdhani_500Medium as RajdhaniMedium,
} from "@expo-google-fonts/rajdhani";

import AppLoading from "expo-app-loading";
import { StatusBar } from "react-native";
import { Routes } from "./src/routes";
import { Background } from "./src/components/Background";
import { AuthProvider } from "./src/hooks/auth";

export default function App() {
  const [fontsLoaded] = useFonts({
    InterRegular,
    InterMedium,
    RajdhaniMedium,
    RajdhaniBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Background>
  );
}
