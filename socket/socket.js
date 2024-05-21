import io from 'socket.io-client';
import {IP_ADDRESS,PORT} from '@env'
// import dotenv from 'react-native-dotenv';

// dotenv.config();


console.log(IP_ADDRESS)
const socket = io(`aahilalwani25.pythonanywhere.com`);
export default socket;