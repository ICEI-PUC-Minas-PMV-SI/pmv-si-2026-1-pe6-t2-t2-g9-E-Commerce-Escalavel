import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { BottomNavigation } from 'react-native-paper';

import Carrinho from './Carrinho';
import Perfil from './Perfil';
import Prateleira from './Prateleira';

const Home = () => {
  const [index, setIndex] = useState(1);
  const [routes] = React.useState([
    { key: 'carrinho', title: 'Carrinho', icon: 'cart-variant' },
    { key: 'prateleira', title: 'Prateleira', icon: 'gamepad-variant' },
    { key: 'perfil', title: 'Perfil', icon: 'account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    prateleira: Prateleira,
    carrinho: Carrinho,
    perfil: Perfil,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      // Altera diretamente as cores do texto e ícones sem precisar de objetos de tema
      activeColor="#333333"       // Cor do ícone/texto quando selecionado
      inactiveColor="#666666"     // Cor do ícone/texto quando desmarcado
      barStyle={styles.barraInferior}
    />
  );
};

const styles = StyleSheet.create({
  barraInferior: {
    backgroundColor: '#79E0DC', // Pintando o fundo da barra inteira com o seu turquesa
  },
});

export default Home;