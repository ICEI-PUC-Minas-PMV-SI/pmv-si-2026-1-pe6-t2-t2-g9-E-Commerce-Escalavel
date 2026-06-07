import axios from 'axios';
import { Platform } from 'react-native';

// Configura o IP de acordo com o ambiente que você está testar
const baseURL = Platform.OS === 'android' 
  ? 'http://10.0.2.2:5120/api' // Troque o 5123 pela porta REAL do seu ASP.NET
  : 'https://localhost:7137/api';

const api = axios.create({
  baseURL: 'https://localhost:7137/api',
  timeout: 10000, // Se a API demorar mais de 10 segundos, cancela a requisição
});

export default api;