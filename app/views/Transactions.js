import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import TransactionCard from "../components/TransactionCard";
import colors from "../config/colors";

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

const Transactions = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.value.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TransactionCard
            title={item.title}
            subTitle={item.subtitle}
            icon={item.icon}
            inner={item.inner}
            outer={item.outer}
            amount={item.amount}
          />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
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

export default Transactions;
