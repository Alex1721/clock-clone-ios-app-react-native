import { View, Text } from "react-native";
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
          headerRight: () => <Ionicons name="add" size={24} color="orange" />,
          headerLeft: () => (
            <Text style={{ color: "orange", marginLeft: 10 }}>Edit</Text>
          ),
        }}
      />
    </Stack>
  );
};

export default Layout;
