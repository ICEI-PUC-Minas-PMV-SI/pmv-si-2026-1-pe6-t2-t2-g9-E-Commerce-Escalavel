import React, { useState } from 'react';
import { View, StyleSheet, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { TextInput, Button, Text, ActivityIndicator } from 'react-native-paper';
import api from '../services/api';

const Cadastro = ({ navigation }) => {
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [conSenha, setConSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [secureText, setSecureText] = useState(true);
  const [secureTextConf, setSecureTextConf] = useState(true);

  // FUNÇÃO DE CADASTRO (Lógica idêntica ao seu script HTML Web)
  const realizarCadastro = async () => {
    // 1. Validação de campos vazios
    if (usuario === "" || email === "" || senha === "" || conSenha === "") {
      alert("Usuário ou senha não preenchido");
      return;
    }

    // 2. Validação se as senhas batem
    if (senha !== conSenha) {
      alert("Senhas e confirmação de senha não corresponde");
      return;
    }

    try {
      setLoading(true);

      // Objeto idêntico ao JSON.stringify do seu site
      const corpoRequisicao = {
        nome: usuario,
        email: email,
        password: senha,
        perfil: 1 // Perfil de cliente padrão
      };

      // POST para a rota: /api/Usuarios
      const resposta = await api.post('/Usuarios', corpoRequisicao);

      if (resposta.status === 200 || resposta.status === 201 || resposta.status === 204) {
        alert("Usuário cadastrado com sucesso!\nFaça seu primeiro login.");
        navigation.navigate('Login'); // Retorna para a tela de login
      } else {
        alert("Não foi possível processar o cadastro.");
      }

    } catch (erro) {
      console.error(erro);
      alert('Falha ao cadastrar usuário: ' + (erro.response?.data || erro.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.containerPrincipal}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* Logo GameStore */}
        <View style={styles.containerLogo}>
          <Image 
            source={{ uri: 'https://via.placeholder.com/180.png?text=Logo+GameStore' }}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Caixa de Cadastro */}
        <View style={styles.boxCadastro}>
          <Text variant="headlineSmall" style={styles.titulo}>
            Criar Conta
          </Text>

          {/* Campo Nome de Usuário */}
          <TextInput
            label="Usuário"
            mode="outlined"
            value={usuario}
            onChangeText={setUsuario}
            autoCapitalize="words"
            style={styles.input}
            activeOutlineColor="#79E0DC"
            left={<TextInput.Icon icon="account-outline" />}
          />

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

          {/* Campo Confirmar Senha */}
          <TextInput
            label="Confirmar Senha"
            mode="outlined"
            value={conSenha}
            onChangeText={setConSenha}
            secureTextEntry={secureTextConf}
            autoCapitalize="none"
            style={styles.input}
            activeOutlineColor="#79E0DC"
            left={<TextInput.Icon icon="lock-check-outline" />}
            right={
              <TextInput.Icon 
                icon={secureTextConf ? "eye" : "eye-off"} 
                onPress={() => setSecureTextConf(!secureTextConf)} 
              />
            }
          />

          {loading && <ActivityIndicator animating={true} color="#79E0DC" style={{ marginVertical: 10 }} />}

          {/* Botões operacionais */}
          <View style={styles.containerBotoes}>
            <Button 
              mode="outlined" 
              onPress={() => navigation.navigate('Login')} // Volta para a tela de login
              style={[styles.botao, styles.botaoVoltar]}
              textColor="#79E0DC"
            >
              Voltar
            </Button>

            <Button 
              mode="contained" 
              onPress={realizarCadastro} 
              disabled={loading}
              style={[styles.botao, styles.botaoEnviar]}
            >
              Cadastrar
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
    backgroundColor: '#79E0DC', // Modificado para a nova cor turquesa clara
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  containerLogo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 180,
    height: 90,
  },
  boxCadastro: {
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
    marginBottom: 20,
    color: '#333',
  },
  input: {
    marginBottom: 14,
    backgroundColor: '#fff',
  },
  containerBotoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  botao: {
    flex: 1,
    borderRadius: 6,
    height: 45,
    justifyContent: 'center',
  },
  botaoVoltar: {
    marginRight: 8,
    borderColor: '#79E0DC', // Borda turquesa
    borderWidth: 1.5,
  },
  botaoEnviar: {
    marginLeft: 8,
    backgroundColor: '#79E0DC', // Botão sólido turquesa
  },
});

export default Cadastro;