import { View, Text } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useAppSelector } from "../app/hooks";

const Header = () => {
  const notes = useAppSelector((state) => state.notes.value);
  return (
    <View
      style={{ alignItems: "center", flexDirection: "row", marginVertical: 15 }}
    >
      <View>
        <Text style={{ fontSize: 30, marginBottom: 10 }}>全部笔记</Text>
        <Text style={{ fontSize: 16 }}>{notes.length}项笔记</Text>
      </View>
      <View
        style={{
          marginLeft: "auto",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <EvilIcons name="search" size={30} color="black" />
        <Entypo
          style={{ marginLeft: 10 }}
          name="dots-three-vertical"
          size={20}
          color="black"
        />
      </View>
    </View>
  );
};

export default Header;
