import { Component, OnInit } from '@angular/core';
import { ElectionService } from './service/election.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dapp Ethereum';
  candidatesCount: any;

  constructor() { }

  ngOnInit() { }
}
