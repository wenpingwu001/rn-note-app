import { Text, View, Pressable, StyleSheet, Dimensions } from "react-native";
import React from "react";

const width = Dimensions.get("window").width;

interface Item {
  id: string;
  time: string;
  title?: string;
  content?: string;
}
const NoteItem = () => {
  return (
    <Pressable style={styles.container}>
      <View>
        <Text style={styles.time}>2021/06/22</Text>
        <Pressable></Pressable>
      </View>
      <Text></Text>
      <Text></Text>
      {/* time  */}
      {/* check */}
      {/* title */}
      {/* content */}
      <Text>NoteItem</Text>
    </Pressable>
  );
};

export default NoteItem;

const styles = StyleSheet.create({
  container: {
    width: (width - 40) / 2,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
  },
  time: {
    fontSize: 10,
  },
});
