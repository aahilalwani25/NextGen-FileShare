import io from 'socket.io-client';
import {IP_ADDRESS,PORT} from '@env'
// import dotenv from 'react-native-dotenv';

// dotenv.config();


console.log(IP_ADDRESS)
const socket = io(`http://${IP_ADDRESS}:${PORT}`);
export default socket;