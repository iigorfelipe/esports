import { useRef, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Subscription } from 'expo-modules-core';
import * as Notifications from 'expo-notifications';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';

import { Background } from './src/components/Background';
import Routes from './src/routes';
import { Loading } from './src/components/Loading';

import './src/services/notificationConfig';
import { getPushNotificationToken } from './src/services/getPushNotificationToken';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });

  const getNotificationLisstener = useRef<Subscription>();
  const responseNotificationLisstener = useRef<Subscription>();

  useEffect(() => {
    getPushNotificationToken();
  });

  useEffect(() => {
    getNotificationLisstener.current = Notifications.addNotificationReceivedListener(
      (notification) => console.log(notification)
    );

    responseNotificationLisstener.current = Notifications.addNotificationResponseReceivedListener(
      (response) => console.log(response)
    );
  
    return () => {
      if (getNotificationLisstener.current && responseNotificationLisstener.current) {
        Notifications.removeNotificationSubscription(getNotificationLisstener.current);
        Notifications.removeNotificationSubscription(responseNotificationLisstener.current);
      }
    }
  }, []);

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      { fontsLoaded ? <Routes /> : <Loading /> }

    </Background>
  );
}
 