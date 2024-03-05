import { View, Text, Pressable, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import Colors from "@/constants/Colors";
import React, { useState } from "react";

const Header = () => {
  const [search, setSearch] = useState("");
  const [hidden, setHidden] = useState(false);

  return (
    <>
      <Text style={styles.title}>Choose a city</Text>
      <View style={styles.header}>
        <View style={styles.inputContainer}>
          <Ionicons name="search" size={20} color={Colors.grey} />
          <TextInput
            placeholder="Search"
            placeholderTextColor={Colors.grey}
            value={search}
            onChangeText={(text) => setSearch(text)}
            style={styles.input}
          />
          {search !== "" && (
            <Pressable onPress={() => setSearch("")}>
              <Ionicons name="close-circle" size={20} color={Colors.grey} />
            </Pressable>
          )}
        </View>
        <Link href="/(world-clock)" asChild>
          <Pressable>
            <Text style={{ color: "orange", fontSize: 20 }}>Close</Text>
          </Pressable>
        </Link>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  title: {
    color: "white",
    alignSelf: "center",
    marginTop: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  inputContainer: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#3A393E",
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  input: {
    color: "white",
    flex: 1,
    fontSize: 16,
    height: "100%",
  },
});
