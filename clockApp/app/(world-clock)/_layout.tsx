import { Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerTintColor: "orange",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "World Clock",
          headerTitleStyle: { color: "white" },
          headerLargeTitle: true,
          headerTransparent: true,
          headerShadowVisible: false,
          headerBlurEffect: "systemChromeMaterial",
        }}
      />
      <Stack.Screen
        name="add-clock"
        options={{
          presentation: "modal",
          animation: "slide_from_bottom",
          headerTitle: () => (
            <Text style={{ color: "white" }}>Choose a city</Text>
          ),
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "#272729",
          },
        }}
      />
    </Stack>
  );
};

export default Layout;
