import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import FloatButton from "../components/FloatButton";
import CreateNoteModal from "../components/CreateNoteModal";
import NoteItem from "../components/NoteItem";
import Header from "../components/Header";

const NoteScreen = () => {
  const [isCreateNoteModalOpen, setIsCreateNoteModalOpen] = useState(false);
  const handlePress = () => {
    setIsCreateNoteModalOpen(!isCreateNoteModalOpen);
  };
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#eee", paddingHorizontal: 20 }}
    >
      <Header />
      <View>
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
      </View>
      <FloatButton onPress={handlePress} />
      <CreateNoteModal
        isVisible={isCreateNoteModalOpen}
        onClosePress={handlePress}
      />
    </SafeAreaView>
  );
};

export default NoteScreen;
