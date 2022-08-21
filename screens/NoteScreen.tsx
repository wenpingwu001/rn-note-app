import { Modal, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FloatButton from "../components/FloatButton";
import CreateNoteModal from "../components/CreateNoteModal";

const NoteScreen = () => {
  const [isCreateNoteModalOpen, setIsCreateNoteModalOpen] = useState(false);
  const handlePress = () => {
    setIsCreateNoteModalOpen(!isCreateNoteModalOpen);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Note Screen</Text>
      <CreateNoteModal
        isVisible={isCreateNoteModalOpen}
        onClosePress={handlePress}
      />
      <FloatButton onPress={handlePress} />
    </SafeAreaView>
  );
};

export default NoteScreen;
