import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "./assets/css/app.style";
// Components
import { Header } from "./components/Header/Header";
import { CardToDo } from "./components/CardToDo/CardToDo";

export default function App() {
  const [toDoList, setToDoList] = useState([
    { id: 1, title: "Sortir le chien", isCompleted: true },
    { id: 2, title: "Aller chez le garagiste", isCompleted: false },
    { id: 3, title: "Faire les courses", isCompleted: true },
    { id: 4, title: "Appeler le vétérinaire", isCompleted: true },
    { id: 5, title: "Sortir le chien", isCompleted: true },
    { id: 6, title: "Aller chez le garagiste", isCompleted: false },
    { id: 7, title: "Faire les courses", isCompleted: true },
    { id: 8, title: "Appeler le vétérinaire", isCompleted: true },
  ]);

  function renderToDoList() {
    return toDoList.map((todo) => <CardToDo toDo={todo} onPress={updateTodo} />);
  }

  // Get todo data (one element) and update its isCompleted property by retrieving its index in the toDoList array
  function updateTodo(todo) {
    const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
    const indexToUpdate = toDoList.findIndex((todo) => todo.id === updatedTodo.id);
    const updatedTodoList = [...toDoList];
    updatedTodoList[indexToUpdate] = updatedTodo;
    setToDoList(updatedTodoList);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.app}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.body}>
          <ScrollView>{renderToDoList()}</ScrollView>
        </View>
        <View style={styles.footer}>
          <Text>Footer</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
