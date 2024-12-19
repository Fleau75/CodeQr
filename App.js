
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import store from "./src/store";
import MainScreen from "./src/screens/MainScreen";
import QRCodeScreen from "./src/screens/QRCodeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MainScreen" component={MainScreen} options={{ title: "Accueil" }} />
          <Stack.Screen name="QRCodeScreen" component={QRCodeScreen} options={{ title: "QR Code" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
