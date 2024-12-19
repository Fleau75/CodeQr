
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import QRCode from "react-native-qrcode-svg";

const QRCodeScreen = () => {
  const { firstName, lastName } = useSelector((state) => state.profile);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Votre QR Code</Text>
      <QRCode value={`${firstName} ${lastName}`} size={200} />
      <Text style={styles.text}>Nom : {firstName}</Text>
      <Text style={styles.text}>Prénom : {lastName}</Text>
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
  text: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default QRCodeScreen;
