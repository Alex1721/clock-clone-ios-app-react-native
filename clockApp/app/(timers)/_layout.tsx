import { View, Text, Pressable } from "react-native";
import { Stack, Link } from "expo-router";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
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
        name="timers"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="add-timer"
        options={{
          presentation: "modal",
          animation: "slide_from_bottom",
          headerShown: true,
          headerTitle: () => (
            <Text style={{ color: "white", fontSize: 20 }}>Ringtone</Text>
          ),
          headerStyle: { backgroundColor: Colors.grey },
          headerRight: () => (
            <Link href="/timers" asChild>
              <Pressable>
                <Text style={{ color: "orange", fontSize: 20 }}>Confirm</Text>
              </Pressable>
            </Link>
          ),
          headerLeft: () => (
            <Link href="/timers" asChild>
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
