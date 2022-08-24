import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, FlatList } from "react-native";
import FloatButton from "../components/FloatButton";
import CreateNoteModal from "../components/CreateNoteModal";
import Header from "../components/Header";
import { useAppSelector } from "../app/hooks";
import NoteItem from "../components/NoteItem";

const NoteScreen = () => {
  const [isCreateNoteModalOpen, setIsCreateNoteModalOpen] = useState(false);
  const notes = useAppSelector((state) => state.notes.value);
  const handlePress = () => {
    setIsCreateNoteModalOpen(!isCreateNoteModalOpen);
  };
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#eee", paddingHorizontal: 20 }}
    >
      <Header />
      {notes.length === 0 ? (
        <Text>empty</Text>
      ) : (
        <FlatList data={notes} renderItem={NoteItem} />
      )}

      <FloatButton onPress={handlePress} />
      <CreateNoteModal
        isVisible={isCreateNoteModalOpen}
        onClosePress={handlePress}
      />
    </SafeAreaView>
  );
};

export default NoteScreen;
