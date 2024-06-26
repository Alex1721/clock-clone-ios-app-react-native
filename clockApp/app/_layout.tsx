import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Appearance } from "react-native";
import { BlurView } from "expo-blur";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  Appearance.setColorScheme("dark");
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={DarkTheme}>
      <RootLayoutNav />
      <StatusBar style="light" />
    </ThemeProvider>
  );
}

function RootLayoutNav() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "#7C7C7C",
        tabBarStyle: { backgroundColor: "black" },
      }}
    >
      <Tabs.Screen
        name="(world-clock)"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="globe-outline" size={26} color={color} />
          ),
          tabBarLabel: "World Clock",
          tabBarStyle: { backgroundColor: "#121313" },
        }}
      />
      <Tabs.Screen
        name="(alarms)"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="alarm" size={30} color={color} />
          ),
          tabBarLabel: "Alarms",
          tabBarStyle: { backgroundColor: "#121313" },
        }}
      />
      <Tabs.Screen
        name="(stopwatch)"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="stopwatch" size={30} color={color} />
          ),
          tabBarLabel: "Stopwatch",
        }}
      />
      <Tabs.Screen
        name="(timers)"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="timer-outline" size={30} color={color} />
          ),
          tabBarLabel: "Timers",
        }}
      />
    </Tabs>
  );
}
