import { View, Image, FlatList } from 'react-native';

import logoImg from '../../assets/logo-nlw-esports.png';
import { GAMES } from '../../utils/games';

import { GameCard } from '../../components/GameCard';
import { Heading } from '../../components/Heading';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>

      <Image
        source={logoImg}
        style={styles.logo}
      />

      <Heading
        title='Encontre seu duo!'
        subTitle='Selecione o game que deseja jogar...'
      />

      <FlatList
        data={GAMES}
        horizontal
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
        renderItem={({ item }) => (
          <GameCard
            data={item}
          />
        )}
      />

    </View>
  );
}