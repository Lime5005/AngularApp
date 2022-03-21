import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // <app-servers></app-servers>
  //selector: '[app-servers]', //<div app-servers></div>
  //selector: '.app-servers', //<div class="app-servers"></div>
  templateUrl: './servers.component.html',
  // template: `<app-server></app-server>
  // <app-server></app-server>`,
  styleUrls: ['./servers.component.css']

})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus: string = 'No server was created!';
  serverName = '';
  userName = '';
  serverCreated = false;
  showDetails = false;
  serverList = ['Testserver', 'Testserver 2'];
  countList = [];
  count: number = 0;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverList.push(this.serverName);
    this.serverCreationStatus = 'One Server was created, the name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUpdateUserName(event: Event) {
    this.userName = '';
  }

  showAndCount() {
    this.showDetails = !this.showDetails;
    this.count++;
    this.countList.push(this.count);
    //this.countList.push(new Date());
  }

}
