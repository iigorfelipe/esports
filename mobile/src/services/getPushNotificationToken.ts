import * as Notifications from 'expo-notifications';

export const getPushNotificationToken = async () => {
  const { granted } = await Notifications.getPermissionsAsync();

  if (!granted) {
    await Notifications.requestPermissionsAsync();
  }

  if (granted) {
    const { data } = await Notifications.getExpoPushTokenAsync();
    console.log('TOKEN>>>>>>>>', data);
    return data;
  }
};
