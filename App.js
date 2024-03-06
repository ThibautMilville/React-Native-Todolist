import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "./assets/css/app.style";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.app}>
        <View style={styles.header}>
          <Text>Header</Text>
        </View>
        <View style={styles.body}>
          <Text>Body</Text>
        </View>
        <View style={styles.footer}>
          <Text>Footer</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
