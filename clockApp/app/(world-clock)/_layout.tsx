import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "orange",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "",
          headerRight: () => (
            <Link href="/add-timer" asChild>
              <Pressable>
                <Ionicons name="add" size={24} color="orange" />
              </Pressable>
            </Link>
          ),
          headerLeft: () => (
            <Text style={{ color: "orange", fontSize: 16 }}>Edit</Text>
          ),
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
