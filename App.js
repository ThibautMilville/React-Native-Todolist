import React, { useState } from "react";
import { View, ScrollView, Alert } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Dialog from "react-native-dialog";
import uuid from "react-native-uuid";
// Styles
import { styles } from "./assets/css/app.style";
// Components
import { Header } from "./components/Header/Header";
import { CardToDo } from "./components/CardToDo/CardToDo";
import { TabBottomMenu } from "./components/TabBottomMenu/TabBottomMenu";
import { ButtonAdd } from "./components/ButtonAdd/ButtonAdd";

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
  const [selectedTabName, setSelectedTabName] = useState("all");
  const [isAddDialogVisible, setIsAddDialogVisible] = useState(false);
  const [dialogInputValue, setDialogInputValue] = useState("");

  // Render the filtered list of todos according to the selected tab
  function renderToDoList() {
    let filteredList = getFilteredList();
    return filteredList.map((todo) => <CardToDo toDo={todo} key={todo.id} onPress={updateTodo} onLongPress={deleteTodo} />);
  }

  // Get todo data (one element) and update its isCompleted property by retrieving its index in the toDoList array
  function updateTodo(todo) {
    const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
    const indexToUpdate = toDoList.findIndex((todo) => todo.id === updatedTodo.id);
    const updatedTodoList = [...toDoList];
    updatedTodoList[indexToUpdate] = updatedTodo;
    setToDoList(updatedTodoList);
  }

  // Delete a todo from the toDoList array
  function deleteTodo(todo) {
    Alert.alert("Suppression", "Supprimer cette tâche ?", [
      {
        text: "Annuler",
        style: "cancel",
      },
      {
        text: "Supprimer",
        style: "destructive",
        onPress: () => {
          const deleteTodo = { ...todo };
          const indexToDelete = toDoList.findIndex((todo) => todo.id === deleteTodo.id);
          const updatedTodoList = [...toDoList];
          updatedTodoList.splice(indexToDelete, 1);
          setToDoList(updatedTodoList);
        },
      },
    ]);
  }

  // Filter function to display the right list of todos according to the selected tab
  function getFilteredList() {
    switch (selectedTabName) {
      case "all":
        return toDoList;
      case "inProgress":
        return toDoList.filter((todo) => !todo.isCompleted);
      case "done":
        return toDoList.filter((todo) => todo.isCompleted);
    }
  }

  function showAddDialog() {
    setIsAddDialogVisible(true);
  }
  
  function addTodo() {
    const newTodo = {
      id: uuid.v4(),
      title: dialogInputValue,
      isCompleted: false,
    };
    setToDoList([...toDoList, newTodo]);
    setIsAddDialogVisible(false);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.app}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.body}>
          <ScrollView>{renderToDoList()}</ScrollView>
          <ButtonAdd onPress={showAddDialog} />
        </View>
        <View style={styles.footer}>
          <TabBottomMenu onPress={setSelectedTabName} selectedTabName={selectedTabName} toDoList={toDoList} />
        </View>
      </SafeAreaView>
      <Dialog.Container visible={isAddDialogVisible} onBackdropPress={() => setIsAddDialogVisible(false)}>
        <Dialog.Title>Créer une tâche</Dialog.Title>
        <Dialog.Description>Choisi un nom pour la nouvelle tâche</Dialog.Description>
        <Dialog.Input onChangeText={setDialogInputValue} />
        <Dialog.Button disabled={dialogInputValue.trim().length === 0} label="Créer" onPress={addTodo} />
      </Dialog.Container>
    </SafeAreaProvider>
  );
}