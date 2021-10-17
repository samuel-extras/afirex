import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import Button from "../components/Button";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/images/afriex2.png")}
        />
      </View>
      <View style={styles.text}>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.tagLine}>
          Get started by connecting your Wallet into your account
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Connect Wallet"
          onPress={() => navigation.navigate("Tabs")}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },

  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagLine: {
    fontSize: 15,
    paddingVertical: 2,
    color: "#696969",
    // textShadowColor: colors.black,
    // textShadowOffset: { width: -3, height: 3 },
    // textShadowRadius: 10,
  },
  text: {
    position: "absolute",
    top: "40%",
  },
  welcome: {
    fontSize: 45,
  },
});

export default Welcome;
