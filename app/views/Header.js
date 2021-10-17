import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import SearchButton from "../components/SearchButton";
import colors from "../config/colors";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarName}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/afriex1.png")}
            style={styles.image}
            resizeMethod="resize"
            resizeMode="cover"
          />
        </View>
        <View style={styles.text}>
          <Text style={styles.hello}>Hello </Text>
          <Text style={styles.name}>Welcome</Text>
        </View>
      </View>
      <View></View>
    </View>
  );
};
const styles = StyleSheet.create({
  avatarName: {
    flex: 1,
    flexDirection: "row",
  },
  container: {
    height: "12%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  image: {
    width: 50,
    height: 50,
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.yellowGreen,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  hello: {
    fontSize: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    marginLeft: 20,
  },
});

export default Header;
