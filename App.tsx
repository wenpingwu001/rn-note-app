import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import NoteScreen from "./screens/NoteScreen";
import TodoScreen from "./screens/TodoScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";

// TODO: safearea view tabbar on ios
const Tab = createMaterialTopTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarPosition="bottom"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return route.name === "Note" ? (
              <MaterialIcons
                name="notes"
                size={24}
                color={focused ? "black" : "gray"}
              />
            ) : (
              <FontAwesome
                name="calendar-check-o"
                size={24}
                color={focused ? "black" : "gray"}
              />
            );
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Note" component={NoteScreen} />
        <Tab.Screen name="Todo" component={TodoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
