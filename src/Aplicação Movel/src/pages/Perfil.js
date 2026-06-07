import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native'; 
import { TextInput, Button, Text, ActivityIndicator, IconButton } from 'react-native-paper'; 
import Header from '../componentes/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import api from '../services/api';
import { Buffer } from 'buffer';
import { useNavigation } from '@react-navigation/native';

const decodificarMeuJwt = (token) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const payloadTraduzido = Buffer.from(base64, 'base64').toString('utf-8');
    return JSON.parse(payloadTraduzido);
  } catch (error) {
    console.error('Erro ao decodificar token:', error);
    return null;
  }
};

const Perfil = () => {
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(true);
  const [secureText, setSecureText] = useState(true); 
  const [senhaOriginal, setSenhaOriginal] = useState('');

  const navigation = useNavigation();

  // 1. OBTER CREDENCIAIS (Com interrupção de fluxo para evitar duplo alerta)
  const obterCredenciais = async () => {
    const tokenSalvo = await AsyncStorage.getItem('token');
    if (!tokenSalvo) {
      alert('Para acessar essa área, você precisa estar logado!');
      navigation.navigate('Login');
      throw new Error('USUARIO_DESLOGADO'); // Lança um erro específico para parar o catch global
    }

    const dadosDoToken = decodificarMeuJwt(tokenSalvo);
    if (!dadosDoToken) {
      navigation.navigate('Login');
      throw new Error('TOKEN_INVALIDO');
    }

    return {
      idUsuario: dadosDoToken.nameid,
      config: {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tokenSalvo}`
        }
      }
    };
  };

  // 2. CARREGA DADOS DO USUÁRIO
  const carregarDadosUsuario = async () => {
    try {
      setLoading(true);
      const credenciais = await obterCredenciais(); // Se não estiver logado, o código "pula" direto pro catch
      
      const { idUsuario, config } = credenciais;
      const resposta = await api.get(`/Usuarios/${idUsuario}`, config);
      
      if (resposta.status === 200) {
        setUsuario(resposta.data.nome);
        setEmail(resposta.data.email);
        setSenhaOriginal(resposta.data.password || '');
      }
    } catch (e) {

      console.log(e.message)
      // SÓ mostra o alerta de erro se NÃO for um redirecionamento proposital de deslogado
      if (e.message !== 'USUARIO_DESLOGADO' && e.message !== 'TOKEN_INVALIDO') {
        alert('Falha ao carregar os dados do seu perfil.');
      }
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      carregarDadosUsuario();
    }, [])
  );

  // 3. FUNÇÃO DE SAIR (LOGOUT)
  const efetuarLogout = async () => {
    Alert.alert(
      "Sair do Aplicativo",
      "Deseja realmente encerrar sua sessão?",
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Sair", 
          style: "destructive", 
          onPress: async () => {
            await AsyncStorage.clear(); // Limpa o token e o carrinho local
            navigation.navigate('Login');
          } 
        }
      ]
    );
  };

  // 4. SALVAR ALTERAÇÕES
  const salvarAlteracoes = async () => {
    if (usuario.trim() === '' || email.trim() === '') {
      alert('Usuário ou email não podem ficar vazios');
      return;
    }

    try {
      setLoading(true);
      const credenciais = await obterCredenciais();
      const { idUsuario, config } = credenciais;

      const senhaFinal = senha !== '' ? senha : Math.random().toString(36).substring(2, 10); // se não alterou a senha, mandamos o hash mockado ou a original se a api retornar

      const corpoRequisicao = {
        id: parseInt(idUsuario),
        nome: usuario,
        email: email,
        password: senha !== '' ? senha : senhaOriginal, 
        perfil: 1        
      };

      const resposta = await api.put(`/Usuarios/${idUsuario}`, corpoRequisicao, config);
      
      if (resposta.status === 204 || resposta.status === 200) {
        alert('Usuário atualizado com sucesso!');
        setSenha(''); 
        setSenhaOriginal(corpoRequisicao.password);
      }
    } catch (e) {
      if (e.message !== 'USUARIO_DESLOGADO') {
        alert('Falha ao atualizar usuário: ' + e.message);
      }
    } finally {
      setLoading(false);
    }
  };

  // 5. DESATIVAR CONTA
  const desativarUsuarioReal = async () => {
    try {
      setLoading(true);
      const credenciais = await obterCredenciais();
      const { idUsuario, config } = credenciais;

      const resposta = await api.delete(`/Usuarios/${idUsuario}`, config);

      if (resposta.status === 204 || resposta.status === 200) {
        alert('Usuário desativado com sucesso.');
        await AsyncStorage.clear(); 
        navigation.navigate('Login'); 
      }
    } catch (e) {
      if (e.message !== 'USUARIO_DESLOGADO') {
        alert('Falha ao remover usuário: ' + e.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const caixaConfirmacaoDesativar = () => {
    Alert.alert(
      "Aviso Importante",
      "Tem certeza de que deseja desativar o seu usuário? Esta ação não poderá ser desfeita.",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Sim, Desativar", style: "destructive", onPress: desativarUsuarioReal }
      ]
    );
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator animating={true} color="#79E0DC" size="large" />
        <Text style={{ marginTop: 10 }}>Sincronizando perfil...</Text>
      </View>
    );
  }

  return (
    <View style={styles.containerPrincipal}>
      <Header title="Meu Perfil" />

      {/* BOTÃO SAIR POSICIONADO ABAIXO DO HEADER */}
      <View style={styles.barraLogout}>
        <Button 
          mode="text" 
          icon="logout" 
          textColor="#79E0DC" 
          onPress={efetuarLogout}
          labelStyle={{ fontWeight: 'bold' }}
        >
          Sair da Conta
        </Button>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cardFormulario}>
          <Text variant="titleLarge" style={styles.tituloSecao}>
            Alterar Cadastro
          </Text>

          <TextInput
            label="Usuário"
            mode="outlined"
            value={usuario}
            onChangeText={setUsuario} 
            style={styles.input}
            activeOutlineColor="#79E0DC"
            left={<TextInput.Icon icon="account" />}
          />

          <TextInput
            label="Email"
            mode="outlined"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            style={styles.input}
            activeOutlineColor="#79E0DC"
            left={<TextInput.Icon icon="email" />}
          />

          <TextInput
            label="Nova Senha (deixe em branco para não alterar)"
            mode="outlined"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={secureText}
            style={styles.input}
            activeOutlineColor="#79E0DC"
            left={<TextInput.Icon icon="lock" />}
            right={
              <TextInput.Icon 
                icon={secureText ? "eye" : "eye-off"} 
                onPress={() => setSecureText(!secureText)} 
              />
            }
          />

          <View style={styles.containerBotoes}>
            <Button
              mode="contained"
              icon="content-save"
              onPress={salvarAlteracoes}
              style={styles.botaoSalvar}
              contentStyle={{ height: 48 }}
            >
              Salvar Alterações
            </Button>

            <Button
              mode="text"
              icon="account-remove"
              textColor="red"
              onPress={caixaConfirmacaoDesativar} 
              style={styles.botaoDesativar}
            >
              Desativar minha conta
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerPrincipal: { flex: 1, backgroundColor: '#f5f5f5' },
  centerContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  scrollContainer: { padding: 16 },
  barraLogout: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    marginTop: 8,
  },
  cardFormulario: { backgroundColor: '#fff', borderRadius: 8, padding: 20, elevation: 3, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
  tituloSecao: { fontWeight: 'bold', marginBottom: 20, color: '#333', textAlign: 'center' },
  input: { marginBottom: 16, backgroundColor: '#fff' },
  containerBotoes: { marginTop: 12 },
  botaoSalvar: { backgroundColor: '#79E0DC', borderRadius: 6, marginBottom: 12 },
  botaoDesativar: { marginTop: 4 },
});

export default Perfil;