import React, { useState, useEffect } from 'react';

import {
  List,
  Searchbar,
  Text,
  Checkbox,
  Card,
  Button,
  Icon,
  Avatar,
  ActivityIndicator,
} from 'react-native-paper';
import {
  View,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import MultiSlider from '@ptomasroos/react-native-multi-slider';

import Header from '../componentes/Header';
import api from '../services/api';
import { useNavigation } from '@react-navigation/native';

const Prateleira = () => {
  const navigation = useNavigation();

  const [expanded, setExpanded] = React.useState(true);
  const [busca, setBusca] = React.useState('');
  const [multiSliderValue, setMultiSliderValue] = useState([0, 1000]);
  const { width } = useWindowDimensions();
  const sliderWidth = useWindowDimensions().width * 0.8;
  const [disponivel, setDisponivel] = React.useState(false);

  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  const multiSliderValuesChange = (values) => {
    setMultiSliderValue(values);
  };

  const carregarProdutosDaApi = async () => {
    try {
      setLoading(true);

      // Faz o GET na rota do seu Controller do ASP.NET (ex: /produtos)
      const response = await api.get('/Estoque');

      // Guarda os dados que vieram do C# no nosso estado
      setProdutos(response.data);
      console.log(produtos);
    } catch (error) {
      console.error('Erro ao buscar dados: ', error);
    } finally {
      setLoading(false); // Desliga a barra de carregamento
    }
  };

  useEffect(() => {
    carregarProdutosDaApi();
  }, []);

  const precoFormatado = (item) => {
    return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(parseFloat(item));
  } 

  const renderItem = ({ item }) => (
    <Card style={styles.card} onPress={() => navigation.navigate('Produto', { item })}>
      <Card.Title
        title={item.nome}
        right={(props) => (
          <View
            style={{
              marginRight: 16, // Afasta o texto da borda colada do celular
              justifyContent: 'flex-start', // Garante que o texto fique centralizado verticalmente
              alignItems: 'flex-énd', // Garante que ele alinhe totalmente à direita
            }}>
            <Text variant="titleLarge" style={{ fontWeight: 'bold' }}>
              {precoFormatado(item.preco)}
            </Text>
          </View>
        )}
      />
      <Card.Content>
        <Text variant="titleLarge">{item.descricao}</Text>
      </Card.Content>
      <Card.Cover source={item.img} />
    </Card>
  );

  return (
    <>
      <Header title="Prateleira" />

      <List.Section>
        <List.Accordion title="Filtros">
          <Searchbar
            placeholder="Buscar"
            onChangeText={setBusca}
            value={busca}
          />

          <View style={styles.container}>
            {/* Mostra os valores mudando em tempo real na tela */}
            <Text style={styles.textLabel}>
              Faixa de preço: R$ {multiSliderValue[0]} - R${' '}
              {multiSliderValue[1]}
            </Text>

            <View style={styles.sliderContainer}>
              <MultiSlider
                values={[multiSliderValue[0], multiSliderValue[1]]} // Valores iniciais
                sliderLength={sliderWidth} // Largura da barra em pixels na tela
                onValuesChange={multiSliderValuesChange}
                min={0} // Limite mínimo absoluto do slider
                max={1000} // Limite máximo absoluto do slider
                step={10} // Vai pulando de 10 em 10 reais
                allowOverlap={true} // Impede que a bolinha mínima passe da máxima
                snapped // Faz a bolinha "grudar" nos steps exatos
                // Estilização para combinar com o tema azul/roxo padrão do Paper
                selectedStyle={{ backgroundColor: '#79E0DC' }}
                unselectedStyle={{ backgroundColor: '#e0e0e0' }}
                markerStyle={styles.marker}
              />
            </View>
          </View>
          <View style={styles.checkContainer}>
            <Text style={styles.textLabel}>Somente disponível</Text>
            <Checkbox
              status={disponivel ? 'checked' : 'unchecked'}
              onPress={() => {
                setDisponivel(!disponivel);
              }}
            />
          </View>
        </List.Accordion>
      </List.Section>

      {/* 3. O FlatList comandando a renderização dinâmica */}
      <FlatList
        data={produtos} // Quem são os dados?
        renderItem={renderItem} // Como desenhar cada dado? (Chama a função acima)
        keyExtractor={(item) => item.id} // Chave única para o React não se perder
        contentContainerStyle={styles.listPadding}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    alignItems: 'center',
    width: '100%',
  },
  textLabel: {
    fontSize: 15,
    paddingLeft: 10,
  },
  sliderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  marker: {
    backgroundColor: '#79E0DC',
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  card: {
    margin: 10,
  },
});

export default Prateleira;