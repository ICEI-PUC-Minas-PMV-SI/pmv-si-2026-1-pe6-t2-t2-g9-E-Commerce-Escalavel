import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import { Text, ActivityIndicator } from 'react-native-paper';
import Header from '../componentes/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import api from '../services/api';
import { Buffer } from 'buffer';

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

const Pagamento = ({ navigation }) => {
  const [nomeComprador, setNomeComprador] = useState('Carregando...');
  const [valorTotal, setValorTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const formatarPreco = (valor) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valor || 0);
  };

  // Carrega os dados para exibição na tela
  const carregarDadosPagamento = async () => {
    try {
      setLoading(true);
      const tokenSalvo = await AsyncStorage.getItem('token');

      if (!tokenSalvo) {
        alert('Para acessar essa área, você precisa estar logado!');
        navigation.navigate('Login');
        return;
      }

      const dadosDoToken = decodificarMeuJwt(tokenSalvo);
      if (!dadosDoToken) {
        navigation.navigate('Login');
        return;
      }

      const idUsuario = dadosDoToken.nameid;

      const configHeaders = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tokenSalvo}`
        }
      };

      const respostaCarrinho = await api.get(`/Carrinho/Usuario/${idUsuario}`, configHeaders);
      const respostaUsuario = await api.get(`/Usuarios/${idUsuario}`, configHeaders);

      if (respostaCarrinho.status === 200 && respostaUsuario.status === 200) {
        const itensCarrinho = respostaCarrinho.data.itens || [];
        
        let somaTotal = 0;
        for (const item of itensCarrinho) {
          somaTotal += item.preco * item.quantidade;
        }

        setValorTotal(somaTotal);
        setNomeComprador(respostaUsuario.data.nome);
      }

    } catch (error) {
      console.error("Erro ao processar dados de pagamento:", error);
      alert("Houve um problema com a consulta dos valores de pagamento.");
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      carregarDadosPagamento();
    }, [])
  );

  // EFETUA O PAGAMENTO IMEDIATAMENTE (Sem caixas de diálogo intermediárias)
  const finalizarPagamentoPix = async () => {
    try {
      setLoading(true);
      const tokenSalvo = await AsyncStorage.getItem('token');

      if (!tokenSalvo) {
        navigation.navigate('Login');
        return;
      }

      // Pegamos a URL base configurada na sua instância do axios
      const urlBase = api.defaults.baseURL || 'https://localhost:7137/api';
      
      // DISPARO IDENTICO AO SEU FETCH WEB: Sem body, apenas o Header
      const resposta = await fetch(`${urlBase}/Compra`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${tokenSalvo}`
        }
      });

      if (resposta.ok) {
        alert("Compra realizada com sucesso!");
        navigation.navigate('Home'); 
      } else {
        const textoErro = await resposta.text();
        alert(`Compra não realizada: ${textoErro}`);
      }

    } catch (error) {
      console.error("Erro crítico no faturamento da compra:", error);
      alert("Erro crítico: Não foi possível conectar ao servidor.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator animating={true} color="#79E0DC" size="large" />
        <Text style={{ marginTop: 10 }}>Processando operação...</Text>
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>
      <Header title="Pagamento" goBack={() => navigation.goBack()} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cardPagamento}>
          
          <View style={styles.blocoDados}>
            <Text style={styles.label}>Valor total:</Text>
            <Text style={styles.textoValor}>{formatarPreco(valorTotal)}</Text>

            <Text style={styles.label}>Comprador:</Text>
            <Text style={styles.textoDados}>{nomeComprador}</Text>

            <Text style={styles.label}>Código de verificação:</Text>
            <Text style={styles.textoDados}>12345678</Text>
          </View>

          <View style={styles.divisor} />

          <View style={styles.blocoQrCode}>
            <Text variant="titleMedium" style={styles.tituloInstrucao}>
              Toque no QR Code para pagar instantaneamente:
            </Text>

            <TouchableOpacity 
              style={styles.botaoQrCode} 
              onPress={finalizarPagamentoPix} // Executa direto ao tocar
              activeOpacity={0.7}
            >
              <Image 
                source={{ uri: 'https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=SimuladorPixGameStore' }}
                style={styles.imagemQrCode}
              />
            </TouchableOpacity>

            <Text variant="bodyMedium" style={styles.legendaPix}>
              Pagamento via Pix
            </Text>
          </View>

        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    padding: 20,
    justifyContent: 'center',
  },
  cardPagamento: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 24,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginTop: 10,
  },
  blocoDados: {
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
    marginTop: 12,
  },
  textoValor: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#79E0DC',
    marginBottom: 4,
  },
  textoDados: {
    fontSize: 16,
    color: '#333',
    marginTop: 2,
  },
  divisor: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 20,
  },
  blocoQrCode: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloInstrucao: {
    textAlign: 'center',
    color: '#555',
    marginBottom: 16,
    fontSize: 15,
  },
  botaoQrCode: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    elevation: 2,
  },
  imagemQrCode: {
    width: 180,
    height: 180,
  },
  legendaPix: {
    marginTop: 12,
    fontWeight: 'bold',
    color: '#666',
  },
});

export default Pagamento;