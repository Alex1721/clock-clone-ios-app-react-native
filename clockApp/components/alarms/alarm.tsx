import { View, Text, StyleSheet, Switch } from "react-native";
import React, { useState } from "react";

interface AlarmProps {
  time: string;
  description: string;
  toggle: boolean;
}

const Alarm = ({ time, description, toggle }: AlarmProps) => {
  const [isEnabled, setIsEnabled] = useState(toggle);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: "white", fontSize: 50 }}>
          {time}
          <Text style={{ fontSize: 24 }}>AM</Text>
        </Text>
        <Switch
          trackColor={{ false: "#767577", true: "green" }}
          thumbColor={"white"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <Text style={{ color: "white", fontSize: 14 }}>{description}</Text>
    </View>
  );
};

export default Alarm;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#1C1C1E",
  },
});
