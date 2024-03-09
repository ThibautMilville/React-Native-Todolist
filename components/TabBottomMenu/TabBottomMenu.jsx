// Component example to copy/paste
import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./TabBottomMenu.style";

export function TabBottomMenu({ selectedTabName, onPress }) {
  function getTextStyle(tabName) {
    return {
      fontWeight: "bold",
      width: '100%',
      height: '75%',
      textAlign: 'center',
      textAlignVertical: 'center',
      color: tabName === selectedTabName ? "#2F76E5" : "black",
      borderBottomWidth: tabName === selectedTabName ? 5 : 0,
    };
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => onPress("all")}>
        <Text style={getTextStyle("all")}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onPress("inProgress")}>
        <Text style={getTextStyle("inProgress")}>In progress</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onPress("done")}>
        <Text style={getTextStyle("done")}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}
