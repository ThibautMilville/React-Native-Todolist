// Component example to copy/paste
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./ButtonAdd.style";

export const ButtonAdd = (props) => {
  return <View style={styles.container}>
    <TouchableOpacity onPress={props.onPress}>
      <Text style={styles.text}>+ Nouvelle tâche</Text>
    </TouchableOpacity>
  </View>;
};
