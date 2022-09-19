import * as Notifications from 'expo-notifications';

export const getNotificationToken = async () => {
  const { granted } = await Notifications.getPermissionsAsync();

  if (!granted) {
    const { data } = await Notifications.getExpoPushTokenAsync();
    console.log('TOKEN>>>>>>>>', data);
    return data;
  }
};
