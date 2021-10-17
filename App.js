import React from "react";
import { StatusBar, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./app/navigation";
import Welcome from "./app/screens/Onboarding";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Navigation />
    </NavigationContainer>
  );
}
