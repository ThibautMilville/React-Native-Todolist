// Component example to copy/paste
import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./TabBottomMenu.style";

export function TabBottomMenu({ selectedTabName, onPress, toDoList }) {
  function getTextStyle(tabName) {
    return {
      textAlign: "center",
      fontWeight: "bold",
      width: "100%",
      height: "75%",
      color: tabName === selectedTabName ? "#2F76E5" : "black",
      borderBottomWidth: tabName === selectedTabName ? 5 : 0,
      borderBottomLeftRadius: 6,
      borderBottomRightRadius: 6,
    };
  }

  // Count the number of toDos by status
  const countByStatus = toDoList.reduce(
    (acc, unTodo) => {
      unTodo.isCompleted ? acc.done++ : acc.inProgress++;
      return acc;
    },
    { all: toDoList.length, inProgress: 0, done: 0 }
  );

  return (
    <View style={styles.container}>
      <View style={styles.filterBox}>
        <TouchableOpacity style={styles.button} onPress={() => onPress("all")}>
          <Text style={getTextStyle("all")}>Tous ({countByStatus.all})</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onPress("inProgress")}>
          <Text style={getTextStyle("inProgress")}>En cours ({countByStatus.inProgress})</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onPress("done")}>
          <Text style={getTextStyle("done")}>Terminé ({countByStatus.done})</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
