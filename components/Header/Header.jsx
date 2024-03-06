// Component example to copy/paste
import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./Header.style";
import logo from "../../assets/images/logo.png";

export const Header = () => {
  return (
    <View style={styles.main}>
      <Image source={logo} resizeMode="contain" style={styles.logo} />
      <Text style={styles.logoText}>trucs à faire</Text>
    </View>
  );
};
