import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const Header = ({ title, goBack, children }) => {
  return (
    <Appbar.Header style={styles.headerContainer}>
      {goBack && (
        <Appbar.BackAction 
          onPress={goBack} 
          color="#333333" // Ícone de voltar escuro para contrastar com o fundo claro
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
    backgroundColor: '#79E0DC', // Nova cor turquesa idêntica ao fundo do Login/Cadastro
    elevation: 4, // Sombra sutil no Android
    shadowColor: '#000', // Configuração de sombra para o iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },
  headerTitulo: {
    color: '#333333', // Texto escuro para manter a legibilidade excelente
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Header;