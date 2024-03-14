// Component example to copy/paste
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./CardToDo.style";
import check from "../../assets/images/check.png";

export const CardToDo = (props) => {
  const toDo = props.toDo;

  return (
    <View style={styles.main}>
      <TouchableOpacity style={styles.card} onPress={()=>props.onPress(toDo)} onLongPress={()=>props.onLongPress(toDo)}>
        <Text style={[styles.task, toDo.isCompleted && { textDecorationLine: "line-through" }]}>{toDo.title}</Text>
        {toDo.isCompleted && <Image source={check} resizeMode="contain" style={styles.check} />}
      </TouchableOpacity>
    </View>
  );
};
