import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  View,
  Text,
  FlatList,
} from "react-native";
import DebitCards from "../views/DebitCards";
import Header from "../views/Header";
import Services from "../views/Services";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import colors from "../config/colors";
import TransactionCard3 from "../components/TransactionCard3";

const Tab = createMaterialTopTabNavigator();
const transactions = [
  {
    title: "Ether",
    subtitle: "8.305 Ether",
    amount: 9600,

    value: 1,
    icon: "ethereum",
    inner: colors.black,
    outer: colors.darkSlateGray,
  },
  {
    title: "Bitcoin",
    subtitle: "0.006 BTC ",
    amount: 1260,
    value: 2,
    icon: "bitcoin",
    inner: colors.black,
    outer: colors.darkSlateGray,
  },
  {
    title: "Tether",
    subtitle: "200.80 USDT",
    amount: 100000.4,
    value: 3,
    icon: "dollar-sign",
    inner: colors.black,
    outer: colors.darkSlateGray,
  },
];
const Activities = () => {
  return <Text>Activities</Text>;
};
const Supply = () => {
  return <Text>Supply Markets</Text>;
};

const Transactions = ({ title }) => {
  return (
    <View style={styles.containert}>
      <Text style={styles.heading}>Assets to Lend</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.value.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TransactionCard3
            title={item.title}
            subTitle={item.subtitle}
            icon={item.icon}
            inner={item.inner}
            outer={item.outer}
            amount={item.amount}
            lend="Lend"
          />
        )}
      />
    </View>
  );
};

function Lend() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Transactions} />
      <Tab.Screen name="Lend Activities" component={Activities} />
      <Tab.Screen name="Supply Markets" component={Supply} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  containert: {
    justifyContent: "space-between",
    flex: 1,
    paddingHorizontal: "4%",
    marginTop: 10,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 22,
    color: colors.black,
    marginBottom: "4%",
  },
});

export default Lend;
