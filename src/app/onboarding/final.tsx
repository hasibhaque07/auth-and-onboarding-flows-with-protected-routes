import { useAuthStore } from "@/utils/authStorage";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const FinalScreen = () => {
  const { completedOnboarding } = useAuthStore();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ marginBottom: 10, fontSize: 20 }}>FinalScreen</Text>

      <Pressable style={styles.button} onPress={completedOnboarding}>
        <Text style={{ color: "white" }}>Finish Onboarding</Text>
      </Pressable>
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

export default FinalScreen;
