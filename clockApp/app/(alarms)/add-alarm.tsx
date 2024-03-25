import { View, StyleSheet, SafeAreaView, Pressable, Text } from "react-native";
import { Stack, Link } from "expo-router";
import DateTimePicker from "@react-native-community/datetimepicker";
import Colors from "@/constants/Colors";
import React, { useState } from "react";

import NewAlarm from "@/components/alarms/new-alarm/new-alarm";

const AddAlarm = () => {
  const [recurrence, setRecurrence] = useState("Add Alarm");
  const [description, setDescription] = useState("Never");
  const [ringtone, setRingtone] = useState("Radar (per default)");
  const [alarmReminder, setAlarmReminder] = useState("false");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.grey }}>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Link
              href={{
                pathname: "/(alarms)/alarms",
                params: {
                  recurrence: recurrence,
                  description: description,
                  ringtone: ringtone,
                },
              }}
              asChild
            >
              <Pressable>
                <Text style={{ color: "orange", fontSize: 20 }}>Done</Text>
              </Pressable>
            </Link>
          ),
        }}
      />
      <View style={styles.container}>
        <DateTimePicker
          value={new Date()}
          mode="time"
          display="spinner"
          onChange={() => {}}
        />
        <NewAlarm
          setRecurrence={setRecurrence}
          setDescription={setDescription}
          setRingtone={setRingtone}
          setAlarmReminder={setAlarmReminder}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddAlarm;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    gap: 10,
  },
});
