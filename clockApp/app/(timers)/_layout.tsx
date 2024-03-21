import { View, Text, Pressable } from "react-native";
import { Stack, Link } from "expo-router";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerTintColor: "orange",
      }}
    >
      <Stack.Screen
        name="timer"
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: "black" },
        }}
      />
      <Stack.Screen
        name="add-timer"
        options={{
          presentation: "modal",
          animation: "slide_from_bottom",
        }}
      />
    </Stack>
  );
};

export default Layout;
