import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Stack } from "expo-router";
import Colors from "@/constants/Colors";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "orange",
      }}
    >
      <Stack.Screen
        name="alarms"
        options={{
          headerTitle: "",
          headerTransparent: true,
          headerRight: () => (
            <Link href="/add-alarm" asChild>
              <Pressable>
                <Ionicons name="add" size={30} color="orange" />
              </Pressable>
            </Link>
          ),
          headerLeft: () => (
            <Text style={{ color: "orange", fontSize: 20 }}>Edit</Text>
          ),
        }}
      />
      <Stack.Screen
        name="add-alarm"
        options={{
          presentation: "modal",
          animation: "slide_from_bottom",
          headerShown: true,
          headerTitle: () => (
            <Text style={{ color: "white", fontSize: 20 }}>Add Alarm</Text>
          ),
          headerStyle: { backgroundColor: Colors.grey },
          headerRight: () => (
            <Link href="/alarms" asChild>
              <Pressable>
                <Text style={{ color: "orange", fontSize: 20 }}>Done</Text>
              </Pressable>
            </Link>
          ),
          headerLeft: () => (
            <Link href="/alarms" asChild>
              <Pressable>
                <Text style={{ color: "orange", fontSize: 20 }}>Cancel</Text>
              </Pressable>
            </Link>
          ),
          headerTransparent: true,
        }}
      />
    </Stack>
  );
};

export default Layout;
