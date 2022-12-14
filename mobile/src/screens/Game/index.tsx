import { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { GameParams } from '../../@types/navigation';
import { Entypo } from '@expo/vector-icons';

import logoImg from '../../assets/logo-nlw-esports.png';

import { THEME } from '../../theme';
import { styles } from './styles';

import { Heading } from '../../components/Heading';
import { DuoMatch } from '../../components/DuoMatch';
import { Background } from '../../components/Background';
import { DuoCard, DuoCardProps } from  '../../components/DuoCard';

export function Game() {
  const [duos, setDuos] = useState<DuoCardProps[]>([]);
  const [discordDuoSelected, setDiscordDuoSelected] = useState('');

  useEffect(() => {
    fetch(`http://192.168.0.99:3001/games/${game.id}/ads`)
      .then((response) => response.json())
      .then((data) => setDuos(data))
  }, []);

  const navigation = useNavigation();
  const route = useRoute();
  const game = route.params as GameParams;

  const handleGoBack = () => {
    navigation.goBack();
  };

  const getDicordUser = async (adsId: string) => {
    fetch(`http://192.168.0.99:3001/ads/${adsId}/discord`)
      .then((response) => response.json())
      .then((data) => setDiscordDuoSelected(data.discord));
  };

  return (
    <Background>
      <SafeAreaView style={styles.container}>

        <View style={styles.header}>

          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name='chevron-thin-left'
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>
  
          <Image
            source={logoImg}
            style={styles.logo}
          />

          <View style={styles.right}>
          </View>

        </View>

        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode='cover'
        />

        <Heading
          title={game.title}
          subTitle='Conecte-se e comece a jogar!'
        />

        <FlatList
          keyExtractor={(item) => item.id}
          data={duos}
          renderItem={({ item }) => (
            <DuoCard
              data={item}
              onConect={() => getDicordUser(item.id)}
            />
          )}
          horizontal
          style={styles.containerList}
          contentContainerStyle={[
            duos.length > 0
            ? styles.contentList
            : styles.emptyListContent
          ]}  
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>
              N??o h?? an??ncios publicados ainda.
            </Text>
          )}
        />

        <DuoMatch
          visible={discordDuoSelected.length > 0}
          discord={discordDuoSelected}
          onClose={() => setDiscordDuoSelected('')}
        />

      </SafeAreaView>
    </Background>
  );
}
