import { Text, View, Pressable, StyleSheet, Dimensions } from "react-native";
import React from "react";

const width = Dimensions.get("window").width;

interface Item {
  id: string;
  time: string;
  title?: string;
  content?: string;
}
const NoteItem = (props: Item) => {
  const { id, time, title, content } = props;
  return (
    <Pressable style={styles.container}>
      <View>
        <Text style={styles.time}>{time}</Text>
        <Pressable></Pressable>
      </View>
      <Text style={styles.title}>{content}</Text>
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
    marginBottom: 10,
  },
  time: {
    fontSize: 10,
    marginBottom: 10,
  },
  title: {
    // fontWeight: "bold",
    fontSize: 15,
    marginBottom: 5,
  },
});
