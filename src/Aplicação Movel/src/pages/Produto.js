import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Image, TextInput } from 'react-native';
import { Text, Button, IconButton, ActivityIndicator, Snackbar } from 'react-native-paper';
import Header from '../componentes/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

const DetalheProduto = ({ route, navigation }) => {

  
  // Recebe o ID do produto através da navegação da Prateleira
  const idProduto = route?.params?.item?.id ; 

  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quant, setQuant] = useState('1');
  const [snackVisivel, setSnackVisivel] = useState(false); 
  const [mensagemSnack, setMensagemSnack] = useState('');

  // 1. Busca os detalhes do produto na API C# (Usa a instância HTTPS configurada)
  const carregarDadosDoProduto = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/Estoque/${idProduto}`);
      setProduto(response.data);
    } catch (error) {
      console.error("Erro ao buscar detalhes do produto no C#:", error);
      alert("Falha ao buscar as informações do produto no servidor.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarDadosDoProduto();
  }, [idProduto]);

  // 2. Função de Formatação Monetária
  const formatarPreco = (valor) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(parseFloat(valor) || 0);
  };

  // 3. Funções do Seletor de Quantidade (Stepper)
  const incrementar = () => {
    const atual = parseInt(quant) || 0;
    setQuant((atual + 1).toString());
  };

  const decrementar = () => {
    const atual = parseInt(quant) || 0;
    if (atual > 1) {
      setQuant((atual - 1).toString());
    }
  };

  // 4. Conexão Real com a API do Carrinho (POST)
  const adicionarAoCarrinho = async () => {
    try {
      const tokenSalvo = await AsyncStorage.getItem('token');

      if (!tokenSalvo) {
        alert('Você precisa estar logado para adicionar itens ao carrinho!');
        navigation.navigate('Login');
        return;
      }

      const quantidadeEnvio = parseInt(quant) || 1;

      const configHeaders = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tokenSalvo}`
        }
      };

      const corpoRequisicao = {
        idProduto: idProduto,
        quantidade: quantidadeEnvio
      };

      // Realiza o POST real na API local utilizando HTTPS
      const resposta = await api.post('/Carrinho', corpoRequisicao, configHeaders);

      if (resposta.status === 200 || resposta.status === 201 || resposta.status === 204) {
        setMensagemSnack(`${quantidadeEnvio}x "${produto.nome}" adicionado ao carrinho!`);
        setSnackVisivel(true);
      } else {
        alert('Não foi possível adicionar o item: Resposta inesperada do servidor.');
      }

    } catch (error) {
      console.error("Erro ao postar item no carrinho:", error);
      if (error.response && error.response.data) {
        alert("Erro: " + error.response.data);
      } else {
        alert("Falha ao adicionar o produto ao carrinho. Verifique sua conexão.");
      }
    }
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator animating={true} color="#79E0DC" size="large" />
        <Text style={{ marginTop: 10 }}>Carregando informações do produto...</Text>
      </View>
    );
  }

  if (!produto) {
    return (
      <View style={styles.centerContainer}>
        <Text variant="titleMedium">Produto não encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>
      {/* Adicionado a ação de voltar baseada no seu Header customizado */}
      <Header title={produto.nome} goBack={() => navigation.goBack()} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: produto.img || 'https://via.placeholder.com/400x300.png?text=Sem+Imagem' }}
            style={styles.imagem}
            resizeMode="cover"
          />
        </View>

        <View style={styles.infoContainer}>
          <Text variant="headlineMedium" style={styles.titulo}>
            {produto.nome}
          </Text>
          
          <Text variant="headlineSmall" style={styles.preco}>
            {formatarPreco(produto.preco)}
          </Text>

          <Text variant="bodyLarge" style={styles.descricao}>
            {produto.descricao}
          </Text>
        </View>

        <View style={styles.compraContainer}>
          <Text variant="titleMedium">Quantidade:</Text>
          
          <View style={styles.stepper}>
            <IconButton
              icon="minus"
              mode="contained-tonal"
              iconColor="#79E0DC"
              onPress={decrementar}
              disabled={(parseInt(quant) || 0) <= 1}
            />
            
            <TextInput
              style={styles.inputQuantidade}
              value={quant}
              keyboardType="numeric"
              onChangeText={(texto) => setQuant(texto.replace(/[^0-9]/g, ''))}
              onBlur={() => {
                if (!quant || parseInt(quant) === 0) setQuant('1');
              }}
            />

            <IconButton
              icon="plus"
              mode="contained-tonal"
              iconColor="#79E0DC"
              onPress={incrementar}
            />
          </View>

          <Button
            mode="contained"
            icon="cart-plus"
            onPress={adicionarAoCarrinho}
            style={styles.botaoCarrinho}
            contentStyle={{ height: 50 }}
            labelStyle={{ fontSize: 16, fontWeight: 'bold' }}
          >
            Adicionar ao Carrinho
          </Button>
        </View>
      </ScrollView>

      <Snackbar
        visible={snackVisivel}
        onDismiss={() => setSnackVisivel(false)}
        duration={3000}
        action={{
          label: 'Fechar',
          onPress: () => setSnackVisivel(false),
        }}
      >
        {mensagemSnack}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    paddingBottom: 32,
  },
  imageContainer: {
    width: '100%',
    height: 280,
    backgroundColor: '#f0f0f0',
  },
  imagem: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    padding: 20,
  },
  titulo: {
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  preco: {
    color: '#79E0DC',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  descricao: {
    color: '#666',
    lineHeight: 24,
  },
  compraContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
    alignItems: 'center',
  },
  stepper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  inputQuantidade: {
    width: 60,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    borderWidth: 0,
    color: '#333'
  },
  botaoCarrinho: {
    width: '100%',
    borderRadius: 8,
    marginTop: 8,
    backgroundColor: '#79E0DC',
  },
});

export default DetalheProduto;