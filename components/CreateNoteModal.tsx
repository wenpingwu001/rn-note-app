import {
  View,
  Text,
  Modal,
  SafeAreaView,
  Pressable,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const CreateNoteModal = ({ isVisible, onClosePress }: any) => {
  return (
    <Modal animationType="slide" visible={isVisible}>
      <SafeAreaView style={{ margin: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AntDesign
            name="close"
            size={20}
            color="black"
            onPress={onClosePress}
          />
          {/* <View style={{ flexDirection: "row", marginLeft: "auto" }}>
            <AntDesign name="close" size={24} color="black" />
            <AntDesign name="close" size={24} color="black" />
          </View> */}
        </View>
        <Text>CreateNoteModal</Text>
      </SafeAreaView>
    </Modal>
  );
};

export default CreateNoteModal;
