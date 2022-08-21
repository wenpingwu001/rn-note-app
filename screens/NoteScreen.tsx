import { Modal, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FloatButton from "../components/FloatButton";
import CreateNoteModal from "../components/CreateNoteModal";
import NoteItem from "../components/NoteItem";

const NoteScreen = () => {
  const [isCreateNoteModalOpen, setIsCreateNoteModalOpen] = useState(false);
  const handlePress = () => {
    setIsCreateNoteModalOpen(!isCreateNoteModalOpen);
  };
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#eee", paddingHorizontal: 20 }}
    >
      <Text>Note Screen</Text>
      <NoteItem />
      <FloatButton onPress={handlePress} />
      <CreateNoteModal
        isVisible={isCreateNoteModalOpen}
        onClosePress={handlePress}
      />
    </SafeAreaView>
  );
};

export default NoteScreen;
