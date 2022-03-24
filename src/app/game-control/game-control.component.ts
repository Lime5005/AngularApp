import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  gameStarted: boolean = false;
  count = 0;
  myInterval;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.gameStarted = true;
    
    this.myInterval = setInterval(() => {
      this.intervalFired.emit(this.count + 1);
      this.count++;
    }, 1000);
  }

  onStopGame() {
    this.gameStarted = false;
    clearInterval(this.myInterval);
  }
}
