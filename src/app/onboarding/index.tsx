import { Link } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const WelcomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ marginBottom: 10, fontSize: 20 }}>Onboarding Screen 1</Text>
      <Link asChild push href="/onboarding/final">
        <Pressable style={styles.button}>
          <Text style={{ color: "white" }}>Go to Onboarding Screen 2</Text>
        </Pressable>
      </Link>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    padding: 15,
    paddingHorizontal: 50,
    backgroundColor: "black",
    color: "white",
    borderRadius: 50,
    marginBottom: 10,
  },
});
export default WelcomeScreen;
