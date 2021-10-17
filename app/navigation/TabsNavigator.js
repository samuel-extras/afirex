import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Home from "../screens/Home";
import { Text } from "react-native";
import Lend from "../screens/Lend";
import BorrowTabs from "../screens/Borrow";

const Others = () => {
  return <Text>Others</Text>;
};

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: "center",

          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Lend Crypto"
        component={Lend}
        options={{
          headerShown: true,

          headerTitleAlign: "center",

          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cash-multiple"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Borrow Crypto"
        component={BorrowTabs}
        options={{
          headerShown: true,
          headerTitleAlign: "center",

          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cash-multiple"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="More"
        component={Others}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="menu" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
