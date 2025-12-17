import { useAuthStore } from "@/utils/authStorage";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const { logOut, resetOnboarding } = useAuthStore();
  const handleLogout = () => {
    logOut();
    router.replace("/log-in");
  };

  const handleResetOnboarding = () => {
    resetOnboarding();
    router.replace("/onboarding");
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ marginBottom: 10, fontSize: 20 }}>Home Screen</Text>

      <Pressable style={styles.button} onPress={handleLogout}>
        <Text style={{ color: "white" }}>Logout</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handleResetOnboarding}>
        <Text style={{ color: "white" }}>Reset Onboarding</Text>
      </Pressable>
    </View>
  );
}

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
