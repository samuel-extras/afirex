import React from "react";
import { SafeAreaView, StyleSheet, StatusBar, Platform } from "react-native";
import DebitCards from "../views/DebitCards";
import Header from "../views/Header";
import Services from "../views/Services";
import Transactions from "../views/Transactions";

const Home = () => {
  return (
    <>
      <Header />
      <DebitCards />
      <Services />
      <Transactions title="Your Wallet Assets" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default Home;
