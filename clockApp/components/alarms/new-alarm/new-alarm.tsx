import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Switch,
  TextInput,
} from "react-native";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

interface NewAlarmProps {
  setRecurrence: (value: string) => void;
  setDescription: (value: string) => void;
  setRingtone: (value: string) => void;
  setAlarmReminder: (value: string) => void;
}

const NewAlarm = ({
  setRecurrence,
  setDescription,
  setRingtone,
  setAlarmReminder,
}: NewAlarmProps) => {
  const [desc, setDesc] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setAlarmReminder(isEnabled ? "false" : "true");
    setIsEnabled((previousState) => !previousState);
  };
  return (
    <View style={styles.container}>
      <Link href={"/(alarms)/recurrence"} asChild>
        <Pressable style={styles.button}>
          <Text style={{ color: "white", fontSize: 18 }}>Recurrence</Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
            <Text style={{ color: "#9F9EA2", fontSize: 16 }}>Never</Text>
            <Ionicons name="chevron-forward" size={18} color="#9F9EA2" />
          </View>
        </Pressable>
      </Link>

      <Pressable style={styles.button}>
        <Text style={{ color: "white", fontSize: 18 }}>Description</Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
          <View style={{ width: 225 }}>
            <TextInput
              placeholder={"Alarm"}
              placeholderTextColor={"#9F9EA2"}
              style={{
                fontSize: 16,
                color: "#9F9EA2",
                alignSelf: "flex-end",
              }}
              onChangeText={(text) => {
                setDesc(text);
                setDescription(text);
              }}
              value={desc}
              selectionColor={"orange"}
            />
          </View>

          {desc ? (
            <Pressable
              onPress={() => {
                setDesc("");
                setDescription("");
              }}
            >
              <Ionicons name="close-circle" size={18} color="#9F9EA2" />
            </Pressable>
          ) : null}
        </View>
      </Pressable>

      <Link href={"/(alarms)/ringtone"} asChild>
        <Pressable style={styles.button}>
          <Text style={{ color: "white", fontSize: 18 }}>Ringtone</Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
            <Text style={{ color: "#9F9EA2", fontSize: 16 }}>Never</Text>
            <Ionicons name="chevron-forward" size={18} color="#9F9EA2" />
          </View>
        </Pressable>
      </Link>

      <Pressable style={[styles.button, { borderBottomWidth: 0 }]}>
        <Text style={{ color: "white", fontSize: 18 }}>Alarm reminder</Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
          <Switch
            trackColor={{ false: "#767577", true: "green" }}
            thumbColor={"white"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default NewAlarm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2C2C2E",
    borderRadius: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 10,
    paddingVertical: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.1)",
  },
});
