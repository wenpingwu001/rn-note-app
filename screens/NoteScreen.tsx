import { Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FloatButton from "../components/FloatButton";

const NoteScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Note Screen</Text>
      <FloatButton />
    </SafeAreaView>
  );
};

export default NoteScreen;
