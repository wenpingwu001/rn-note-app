import { View, Text } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Header = () => {
  return (
    <View
      style={{ alignItems: "center", flexDirection: "row", marginVertical: 15 }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 30 }}>Title</Text>
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
