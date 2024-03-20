import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerTintColor: "orange",
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        name="add-clock"
        options={{
          presentation: "modal",
          animation: "slide_from_bottom",
        }}
      />
    </Stack>
  );
};

export default Layout;
