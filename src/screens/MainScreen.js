
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { setProfile } from "../store";

const MainScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const dispatch = useDispatch();

  const handleGenerateQRCode = () => {
    if (!firstName || !lastName) {
      Alert.alert("Erreur", "Veuillez remplir tous les champs !");
      return;
    }
    dispatch(setProfile({ firstName, lastName }));
    navigation.navigate("QRCodeScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Générateur de QR Code</Text>
      <TextInput
        style={styles.input}
        placeholder="Prénom"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Nom"
        value={lastName}
        onChangeText={setLastName}
      />
      <Button title="Générer QR Code" onPress={handleGenerateQRCode} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
});

export default MainScreen;
