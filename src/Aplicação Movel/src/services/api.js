import axios from 'axios';

// Substitua pela sua URL fixa do ngrok (sem a barra '/' no final)
const NGROK_URL = 'https://satchel-carry-yard.ngrok-free.dev'; 

const api = axios.create({
  baseURL: `${NGROK_URL}/api`,
  timeout: 10000, // Cancela a requisição se a API demorar mais de 10 segundos
  headers: {
    'Content-Type': 'application/json',
    // Injeta o cabeçalho em TODAS as requisições para burlar o aviso do ngrok e evitar erros
    'ngrok-skip-browser-warning': 'true' 
  }
});

export default api;