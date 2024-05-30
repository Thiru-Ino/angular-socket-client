import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  employeeId: string;
  latitude: number;
  longitude: number;

  constructor(private socketService: SocketService) {
    this.employeeId = '123'; // Example employee ID
    this.latitude = 0;
    this.longitude = 0;
  }

  ngOnInit(): void {
    // Listen for location updates
    this.socketService.on('changeLocation', (data: any) => {
      const { employeeId, latitude, longitude } = data;
      console.log("reciving by client")
      if (this.employeeId === employeeId) {
        this.latitude = latitude;
        this.longitude = longitude;
      }
    });
  }
  

  updateLocation() {
    // Emit the updated location
    console.log("sending to client")
    this.socketService.emit('sendLocation', this.employeeId, this.latitude, this.longitude);
  }
}
