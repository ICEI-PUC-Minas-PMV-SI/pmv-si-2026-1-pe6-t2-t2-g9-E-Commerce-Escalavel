import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carrinho from './Carrinho';
import Perfil from './Perfil';
import Prateleira from './Prateleira';

const Home = () => {
  const [index, setIndex] = useState(1);
  
  // Captura os espaçamentos seguros da parte de baixo do dispositivo
  const insets = useSafeAreaInsets();

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
      activeColor="#333333"      
      inactiveColor="#666666"    
      // Combinamos o estilo fixo com o paddingBottom dinâmico
      barStyle={[
        styles.barraInferior, 
        { paddingBottom: insets.bottom }
      ]}
    />
  );
};

const styles = StyleSheet.create({
  barraInferior: {
    backgroundColor: '#79E0DC', 
  },
});

export default Home;