
import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket;

  constructor() {
    this.socket = io('https://api.jaynaturals.com');
  }

  // Listen to an event
  on(event: string, callback: (data: any) => void) {
    this.socket.on(event, callback);
  }

  // Emit an event
  emit(event: string, ...args: any[]) {
    this.socket.emit(event, ...args);
  }

  // Disconnect the socket
  disconnect() {
    this.socket.disconnect();
  }
}
