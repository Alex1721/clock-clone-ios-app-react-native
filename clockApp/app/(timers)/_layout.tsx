import { Text, Pressable } from "react-native";
import { Stack, Link } from "expo-router";
import React from "react";

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
        }}
      />
      <Stack.Screen
        name="add-timer"
        options={{
          presentation: "modal",
          animation: "slide_from_bottom",
          headerTitle: "Ringtone",
          headerTitleStyle: { color: "white" },
          headerTransparent: true,
          headerBlurEffect: "regular",
          headerLeft: () => {
            return (
              <Link href="/timer" asChild>
                <Pressable>
                  <Text style={{ color: "orange", fontSize: 20 }}>Cancel</Text>
                </Pressable>
              </Link>
            );
          },
        }}
      />
    </Stack>
  );
};

export default Layout;
