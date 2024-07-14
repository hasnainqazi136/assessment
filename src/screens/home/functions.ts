export const sendPushNotification = async (expoPushToken: string) => {
  const message = {
    to: expoPushToken,
    sound: "default",
    title: "Push Notification",
    body: "Here is the notification from Assessment",
    data: {someData: "goes here"},
  };
  console.log("xx-->>message", message);

  const response = await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
  console.log("xx-->>response", response);
};
