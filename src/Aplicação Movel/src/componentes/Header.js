import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Header = ({ title, goBack, children }) => {
  // Captura os espaçamentos seguros do dispositivo atual
  const insets = useSafeAreaInsets();

  return (
    <Appbar.Header 
      style={[
        styles.headerContainer, 
        { 
          // Aplica o espaçamento do topo dinamicamente baseado no dispositivo
          paddingTop: insets.top,
          // Ajusta a altura do Header para somar o tamanho da barra de status
          height: (Platform.OS === 'ios' ? 44 : 56) + insets.top 
        }
      ]}
    >
      {goBack && (
        <Appbar.BackAction 
          onPress={goBack} 
          color="#333333" 
        />
      )}
      <Appbar.Content 
        title={title} 
        titleStyle={styles.headerTitulo} 
      />
      {children}
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#79E0DC', 
    elevation: 4, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },
  headerTitulo: {
    color: '#333333', 
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Header;