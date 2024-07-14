import {View, SafeAreaView, Button} from "react-native";
import React from "react";
import {StatusBar} from "expo-status-bar";
import {usePushNotifications} from "@/src/hooks/usePushNotifications";
import {styles} from "./styles";
import {sendPushNotification} from "./functions";
import {getThemeMode} from "@/src/hooks/useThemeColor";
import {Colors} from "@/src/constants/Colors";

const Home = () => {
  const {expoPushToken}: any = usePushNotifications();
  console.log("xx-->>token", expoPushToken);
  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: getThemeMode()
            ? Colors.dark.background
            : Colors.light.background,
        },
      ]}
    >
      <StatusBar style="dark" />
      <View>
        <Button
          title="Send Notification"
          onPress={() => sendPushNotification(expoPushToken?.data)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
