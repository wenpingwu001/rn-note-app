import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NoteScreen from "./screens/NoteScreen";
import TodoScreen from "./screens/TodoScreen";
import { Provider } from "react-redux";
import store from "./app/store";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
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
    </Provider>
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
