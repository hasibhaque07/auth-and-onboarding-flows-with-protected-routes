import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabsLayout() {
  const insets = useSafeAreaInsets();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "black",
          //bottom: insets.bottom,
          height: 50 + insets.bottom,
          paddingBottom: insets.bottom,
          paddingTop: 5,
          position: "absolute",
          bottom: 20,
          marginHorizontal: 70,
          borderRadius: 25,
        },
        tabBarActiveTintColor: "white",
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="analytics"
        options={{
          title: "Analytics",
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="google-analytics"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
