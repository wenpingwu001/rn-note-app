import { View, TextInput, Text, Modal, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import dayjs from "dayjs";
import { useAppDispatch } from "../app/hooks";

const CreateNoteModal = ({ isVisible, onClosePress }: any) => {
  const [time, setTime] = useState<string>();
  const [text, setText] = useState<string>("");

  const dispatch = useAppDispatch();
  useEffect(() => {
    const t = dayjs().format("MM/DD HH:mm");
    setTime(t.toString());
  }, []);
  return (
    <Modal animationType="slide" visible={isVisible}>
      <SafeAreaView style={{ margin: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 12,
          }}
        >
          <AntDesign
            name="close"
            size={20}
            color="black"
            onPress={onClosePress}
          />
          <AntDesign
            name="setting"
            size={20}
            color="black"
            style={{ marginLeft: "auto" }}
          />
          <AntDesign
            name="sharealt"
            size={20}
            color="black"
            style={{ marginHorizontal: 20 }}
          />
          <Entypo name="dots-three-vertical" size={20} color="black" />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Text style={{ color: "gray" }}>{time}</Text>
          <View style={{ marginHorizontal: 10, alignItems: "center" }}>
            <Text style={{ color: "gray", textAlignVertical: "center" }}>
              |
            </Text>
          </View>
          <Text style={{ color: "gray" }}>{text?.length}字</Text>
        </View>
        <TextInput
          placeholder="text something...."
          value={text}
          onChangeText={(text) => setText(text)}
          keyboardAppearance="default"
          autoFocus
        />
      </SafeAreaView>
    </Modal>
  );
};

export default CreateNoteModal;
