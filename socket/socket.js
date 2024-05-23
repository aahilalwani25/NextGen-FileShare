import io from 'socket.io-client';
import {IP_ADDRESS,PORT} from '@env'
// import dotenv from 'react-native-dotenv';

// dotenv.config();


console.log(IP_ADDRESS)
//const socket = io(`https://aahilalwani25.pythonanywhere.com/`);
const socket= io('http://192.168.1.125:5000');
export default socket;