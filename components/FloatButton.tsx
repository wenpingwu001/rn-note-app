import React from "react";
import { StyleSheet, Pressable, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FloatButton = () => {
  return (
    <Pressable style={styles.button}>
      <Ionicons name="add" size={24} color="white" />
    </Pressable>
  );
};

export default FloatButton;

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    zIndex: 2,
    right: 20,
    bottom: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
