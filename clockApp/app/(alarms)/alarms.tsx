import { View, StyleSheet, FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";

import Alarm from "@/components/alarms/alarm";

const Alarms = () => {
  const alarm = useLocalSearchParams();
  const toggle = alarm.alarmReminder === "true" ? true : true;

  const [data, setData] = useState<any>([]);

  useEffect(() => {
    if (
      alarm.recurrence !== undefined &&
      alarm.description !== undefined &&
      alarm.ringtone !== undefined
    ) {
      setData([...data, { description: alarm.description, toggle: toggle }]);
    }
  }, [alarm.recurrence]);
  console.log(data);
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        contentInsetAdjustmentBehavior="automatic"
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => (
          <Alarm
            time="7:30"
            description={item.description}
            toggle={item.toggle}
          />
        )}
      />
    </View>
  );
};

export default Alarms;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});
