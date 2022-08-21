import { View, Text } from "react-native";
import React from "react";
import FloatButton from "../components/FloatButton";
import { SafeAreaView } from "react-native-safe-area-context";

const TodoScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Todo Screen</Text>
      <FloatButton />
    </SafeAreaView>
  );
};

export default TodoScreen;
