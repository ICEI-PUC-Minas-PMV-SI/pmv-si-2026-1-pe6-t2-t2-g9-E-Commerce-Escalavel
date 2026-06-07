import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';
import {
  Text,
  Button,
  IconButton,
  ActivityIndicator,
  Card,
  Divider,
} from 'react-native-paper';
import Header from '../componentes/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import api from '../services/api';
import { useNavigation } from '@react-navigation/native';
import { Buffer } from 'buffer';

import axios from 'axios';

// Decodificador do JWT Token
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

const Carrinho = () => {
  const [itensCarrinho, setItensCarrinho] = useState([]);
  const [loading, setLoading] = useState(true);
  const [valorTotal, setValorTotal] = useState(0);

  const navigation = useNavigation();

  // Função centralizada para pegar o Token e gerar o Header dinamicamente na hora do uso
  const obterCredenciais = async () => {
    const tokenSalvo = await AsyncStorage.getItem('token');

    if (!tokenSalvo) {
      alert('Para acessar essa área, você precisa estar logado!');
      navigation.navigate('Login');
      return null;
    }

    const dadosDoToken = decodificarMeuJwt(tokenSalvo);
    if (!dadosDoToken) {
      navigation.navigate('Login');
      return null;
    }

    return {
      uid: dadosDoToken.nameid,
      config: {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tokenSalvo}`,
        },
      },
    };
  };

  // 1. BUSCA OS ITENS DO CARRINHO E CRUZA COM O ESTOQUE
  const buscarDadosDoCarrinho = async () => {
    try {
      setLoading(true);

      const credenciais = await obterCredenciais();
      if (!credenciais) return; // Se não tiver credenciais, a função já redirecionou

      const { uid, config } = credenciais;

      console.log('uid: ' + uid);
      console.log('config: ' + JSON.stringify(config));
      // GET: /api/Carrinho/Usuario/{id} passando o objeto de configuração idêntico ao App.js que funcionou
      const respostaCarrinho = await api.get(
        `/Carrinho/Usuario/${uid}`,
        config
      );

      console.log(respostaCarrinho)

      const itensBrutos = respostaCarrinho.data.itens || [];

      let totalAcumulado = 0;
      const listaMontada = [];

      // Loop assíncrono para buscar os detalhes de cada produto no Estoque
      for (const item of itensBrutos) {
        try {
          const respostaProduto = await api.get(`/Estoque/${item.idProduto}`);
          const produtoDados = respostaProduto.data;

          listaMontada.push({
            idCarrinhoItem: item.id,
            idProduto: item.idProduto,
            quantidade: item.quantidade,
            preco: item.preco,
            nome: produtoDados.nome,
            descricao: produtoDados.descricao,
            imagem: produtoDados.imagem,
          });

          totalAcumulado += item.preco * item.quantidade;
        } catch (errProd) {
          console.error(
            `Erro ao cruzar produto ID ${item.idProduto}:`,
            errProd
          );
        }
      }

      setItensCarrinho(listaMontada);
      setValorTotal(totalAcumulado);
    } catch (erro) {
      console.error('Houve um problema com a consulta do carrinho:', erro);
    } finally {
      setLoading(false);
    }
  };

  // 2. DISPARADOR DE TELA COM useFocusEffect CORRIGIDO E SEGURO
  useFocusEffect(
    React.useCallback(() => {
      buscarDadosDoCarrinho();
    }, [])
  );

  // Formatação Monetária (R$)
  const formatarMoeda = (valor) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valor);
  };

  // 3. REMOVER ITEM DO CARRINHO (DELETE)
  const removerItem = async (idCarrinhoItem) => {
    try {
      const credenciais = await obterCredenciais();
      if (!credenciais) return;

      const resposta = await api.delete(
        `/Carrinho/${idCarrinhoItem}`,
        credenciais.config
      );

      if (resposta.status === 200 || resposta.status === 204) {
        buscarDadosDoCarrinho();
      }
    } catch (erro) {
      alert('Falha ao remover item do carrinho.');
    }
  };

  // 4. ATUALIZAR QUANTIDADE (PATCH)
  const alterarQuantidade = async (idCarrinhoItem, novaQuantidade) => {
    if (novaQuantidade < 1) return;

    try {
      const credenciais = await obterCredenciais();
      if (!credenciais) return;

      // No PATCH o Axios espera: url, data, config. Passamos a quantidade no meio.
      const resposta = await api.patch(
        `/Carrinho/${idCarrinhoItem}`,
        novaQuantidade,
        credenciais.config
      );

      if (resposta.status === 200 || resposta.status === 204) {
        buscarDadosDoCarrinho();
      }
    } catch (erro) {
      console.error('Erro ao alterar quantidade:', erro);
    }
  };

  // FINALIZAR COMPRA
  const prosseguirParaPagamento = () => {
    if (itensCarrinho.length === 0) {
      alert('Seu carrinho está vazio!');
    } else {
      navigation.navigate('Pagamento');
    }
  };

  // RENDERIZAÇÃO DOS CARDS
  const renderItemCarrinho = ({ item }) => (
    <Card style={styles.card}>
      <View style={styles.cardContentHorizontal}>
        <View style={styles.containerImagem}>
          <Image
            source={{
              uri:
                item.imagem || 'https://via.placeholder.com/100.png?text=Jogo',
            }}
            style={styles.imagemJogo}
            resizeMode="cover"
          />
        </View>

        <View style={styles.containerTextos}>
          <Text variant="titleMedium" style={styles.textNome} numberOfLines={1}>
            {item.nome}
          </Text>
          <Text
            variant="bodySmall"
            style={styles.textDescricao}
            numberOfLines={2}>
            {item.descricao}
          </Text>
          <Text variant="titleMedium" style={styles.textPreco}>
            {formatarMoeda(item.preco)}
          </Text>

          <View style={styles.stepperContainer}>
            <IconButton
              icon="minus"
              size={16}
              mode="contained-tonal"
              disabled={item.quantidade <= 1}
              onPress={() =>
                alterarQuantidade(item.idCarrinhoItem, item.quantidade - 1)
              }
            />
            <Text style={styles.quantidadeTexto}>{item.quantidade}</Text>
            <IconButton
              icon="plus"
              size={16}
              mode="contained-tonal"
              onPress={() =>
                alterarQuantidade(item.idCarrinhoItem, item.quantidade + 1)
              }
            />
          </View>
        </View>

        <IconButton
          icon="delete-outline"
          iconColor="red"
          size={22}
          onPress={() => removerItem(item.idCarrinhoItem)}
          style={styles.botaoDeletar}
        />
      </View>
    </Card>
  );

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator animating={true} color="#79E0DC" size="large" />
        <Text style={{ marginTop: 10 }}>Calculando seu carrinho...</Text>
      </View>
    );
  }

  return (
    <View style={styles.containerPrincipal}>
      <Header title="Meu Carrinho" />

      <FlatList
        data={itensCarrinho}
        keyExtractor={(item) => item.idCarrinhoItem.toString()}
        renderItem={renderItemCarrinho}
        contentContainerStyle={styles.listaPadding}
        ListEmptyComponent={
          <View style={styles.carrinhoVazioContainer}>
            <IconButton icon="cart-off" size={60} iconColor="#ccc" />
            <Text variant="titleMedium" style={{ color: '#ccc' }}>
              Seu carrinho está vazio.
            </Text>
          </View>
        }
      />

      <View style={styles.resumoContainer}>
        <Divider style={{ marginBottom: 12 }} />
        <View style={styles.linhaTotal}>
          <Text variant="titleLarge" style={{ fontWeight: 'bold' }}>
            Valor Total:
          </Text>
          <Text variant="headlineSmall" style={styles.valorTotalTexto}>
            {formatarMoeda(valorTotal)}
          </Text>
        </View>

        <Button
          mode="contained"
          icon="credit-card-outline"
          style={styles.botaoFinalizar}
          contentStyle={{ height: 50 }}
          labelStyle={{ fontSize: 16, fontWeight: 'bold' }}
          onPress={prosseguirParaPagamento}>
          Finalizar Compra
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerPrincipal: { flex: 1, backgroundColor: '#f5f5f5' },
  centerContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  listaPadding: { padding: 12, paddingBottom: 160 },
  card: { marginBottom: 12, backgroundColor: '#fff', borderRadius: 8 },
  cardContentHorizontal: {
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
  },
  containerImagem: {
    width: 90,
    height: 90,
    backgroundColor: '#eee',
    borderRadius: 6,
    overflow: 'hidden',
  },
  imagemJogo: { width: '100%', height: '100%' },
  containerTextos: { flex: 1, paddingHorizontal: 12 },
  textNome: { fontWeight: 'bold', color: '#333' },
  textDescricao: { color: '#777', marginVertical: 2 },
  textPreco: { color: '#79E0DC', fontWeight: 'bold' },
  stepperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  quantidadeTexto: { fontSize: 14, fontWeight: 'bold', paddingHorizontal: 6 },
  botaoDeletar: { alignSelf: 'flex-start' },
  carrinhoVazioContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  },
  resumoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 5,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  linhaTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  valorTotalTexto: { color: '#79E0DC', fontWeight: 'bold' },
  botaoFinalizar: { backgroundColor: '#79E0DC', borderRadius: 8 },
});

export default Carrinho;