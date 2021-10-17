import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../config/colors";

const DebitCard = ({ balance, currency, digit, name, expire, type, color }) => {
  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <View style={styles.header}>
        <View style={styles.netApy}>
          <Text style={styles.apy}>Assets</Text>
          <Text style={styles.bal}> 6</Text>
        </View>
        <Image
          source={require("../assets/images/afriex3.png")}
          style={styles.logo}
        />
      </View>

      <View style={styles.nameExp}>
        <View>
          <Text style={styles.balance}>Supply Balance</Text>
          <Text style={styles.date}>$200</Text>
        </View>
        <View>
          <Text style={styles.balance}>Borrow Balance</Text>
          <Text style={styles.date}>$890</Text>
        </View>
      </View>
      <View style={styles.nameExp}>
        <View>
          <Text style={styles.balance}>Supply Limit</Text>
          <Text style={styles.date}>100%</Text>
        </View>
        <View>
          <Text style={styles.balance}>Borrow Limit</Text>
          <Text style={styles.date}>$800</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "40%",
  },

  card: {
    width: 328,
    height: 160,
    borderRadius: 20,
    paddingHorizontal: "6%",
    paddingVertical: "2%",
  },

  netApy: {
    flexDirection: "row",
    alignItems: "center",
    height: "25%",
  },
  apy: {
    color: colors.white,
    backgroundColor: colors.skyBlue,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    fontWeight: "900",
  },
  date: {
    color: colors.white,
    textAlign: "center",
    fontSize: 20,
  },

  bal: {
    color: colors.white,
    paddingHorizontal: 8,
    fontSize: 24,
    fontWeight: "bold",
  },

  nameExp: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "30%",
    alignItems: "center",
  },

  balance: {
    color: colors.white,
    fontSize: 14,
  },
  logo: {
    width: 40,
    height: 40,
  },
});

export default DebitCard;
