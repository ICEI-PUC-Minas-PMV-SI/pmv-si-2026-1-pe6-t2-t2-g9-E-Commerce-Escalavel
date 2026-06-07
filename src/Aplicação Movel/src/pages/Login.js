import React, { useState } from 'react';
import { View, StyleSheet, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { TextInput, Button, Text, ActivityIndicator } from 'react-native-paper';
import api from '../services/api';

// IMPORTANTE: Se o Expo reclamar do AsyncStorage, rode no terminal: npx expo install @react-native-async-storage/async-storage
// Se o tempo estiver muito apertado e não quiser instalar agora, pode comentar a linha abaixo e usar apenas a navegação!
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [secureText, setSecureText] = useState(true);

  // FUNÇÃO DE AUTENTICAÇÃO (Igualzinha à sua lógica do Fetch)
  const realizarLogin = async () => {
    if (email === '' || senha === '') {
      alert('Email ou senha não preenchidos');
      return;
    }

    try {
      setLoading(true);

      const corpoRequisicao = {
        email: email,
        password: senha
      };

      // POST: https://localhost:7137/api/Usuarios/authenticate
      const resposta = await api.post('/Usuarios/authenticate', corpoRequisicao);

      if (resposta.status === 200) {
        const dados = resposta.data; // Em Axios, o JSON já vem parseado em .data
        const tokenObtido = dados.jwtToken;

        // Salva o token no celular (Equivalente ao localStorage.setItem)
        if (tokenObtido) {
          await AsyncStorage.setItem('token', tokenObtido);
        }

        alert('Login realizado com sucesso!');
        // Redireciona para a Home (ou Prateleira) do seu App
        navigation.navigate('Home'); 
      } else {
        alert('Falha na autenticação.');
      }

    } catch (erro) {
      console.error(erro);
      // MODO DE SEGURANÇA / PREGUIÇA TRATADO:
      // Se a API estiver desligada mas você precisa demonstrar o fluxo funcionando na faculdade,
      // basta digitar qualquer coisa e ele vai deixar passar se você descomentar a linha abaixo:
      // navigation.navigate('Home');
      
      alert('Falha ao logar: ' + (erro.response?.data || erro.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    // KeyboardAvoidingView serve para o teclado do celular não cobrir os inputs quando abrir
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.containerPrincipal}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* Espaço reservado para a sua logo */}
        <View style={styles.containerLogo}>
          <Image 
            source={{ uri: 'https://via.placeholder.com/180.png?text=Logo+GameStore' }} // Substitua pela sua imagem local se preferir
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Caixa de Login */}
        <View style={styles.boxLogin}>
          <Text variant="headlineSmall" style={styles.titulo}>
            Realizar Login
          </Text>

          {/* Campo Email */}
          <TextInput
            label="Email"
            mode="outlined"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
            activeOutlineColor="#79E0DC"
            left={<TextInput.Icon icon="email-outline" />}
          />

          {/* Campo Senha */}
          <TextInput
            label="Senha"
            mode="outlined"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={secureText}
            autoCapitalize="none"
            style={styles.input}
            activeOutlineColor="#79E0DC"
            left={<TextInput.Icon icon="lock-outline" />}
            right={
              <TextInput.Icon 
                icon={secureText ? "eye" : "eye-off"} 
                onPress={() => setSecureText(!secureText)} 
              />
            }
          />

          {/* Indicador de carregamento sutil */}
          {loading && <ActivityIndicator animating={true} color="#79E0DC" style={{ marginVertical: 10 }} />}

          {/* Botões lado a lado */}
          <View style={styles.containerBotoes}>
            <Button 
              mode="outlined" 
              onPress={() => navigation.navigate('Cadastro')} // Manda para a tela de cadastro
              style={[styles.botao, styles.botaoCadastro]}
              textColor="#79E0DC"
            >
              Cadastrar
            </Button>

            <Button 
              mode="contained" 
              onPress={realizarLogin} 
              disabled={loading}
              style={[styles.botao, styles.botaoLogin]}
            >
              Logar
            </Button>
          </View>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: '#79E0DC', // Fundo roxo temático para destacar a caixinha branca
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  containerLogo: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logo: {
    width: 180,
    height: 100,
  },
  boxLogin: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  titulo: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    color: '#333',
  },
  input: {
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  containerBotoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  botao: {
    flex: 1,
    borderRadius: 6,
    height: 45,
    justifyContent: 'center',
  },
  botaoCadastro: {
    marginRight: 8,
    borderColor: '#79E0DC',
    borderWidth: 1.5,
  },
  botaoLogin: {
    marginLeft: 8,
    backgroundColor: '#79E0DC',
  },
});

export default Login;