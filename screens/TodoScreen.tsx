import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import FloatButton from "../components/FloatButton";

const TodoScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Todo Screen</Text>
      <FloatButton />
    </SafeAreaView>
  );
};

export default TodoScreen;
