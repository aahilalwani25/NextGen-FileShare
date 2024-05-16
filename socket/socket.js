// socket.js

import { io } from 'socket.io-client';

const SERVER_URL = 'http://192.168.1.125:5000'; // Update with your server URL

// Singleton socket instance
class SocketManager {
  constructor() {
    this.socket = null;
  }

  connect() {
    if (!this.socket) {
      this.socket = io(SERVER_URL);
      console.log('Socket connected:', this.socket.id);
    }
    return this.socket;
  }

  disconnect() {
    if (this.socket && this.socket.connected) {
      this.socket.disconnect();
      this.socket = null;
      console.log('Socket disconnected');
    }
  }

  getSocket() {
    return this.socket;
  }
}

const socketManager = new SocketManager();
export default socketManager;
