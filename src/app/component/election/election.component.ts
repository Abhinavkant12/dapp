import { Component, OnInit } from '@angular/core';
import { ElectionService } from 'src/app/service/election.service';

@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.css']
})
export class ElectionComponent implements OnInit {
  name:string;
  candidatesCount: any;
  candidatesList:any
  tranactionId:any;
  votetranactionId:any;
  defaultAccount:any;

  constructor(public electionService: ElectionService) { }

   ngOnInit() {
     
  }

  createCandidate(f:any){ 
    this.tranactionId =  this.electionService.addCandidate(f.name);    
  }

  getCandidates() {
    this.defaultAccount =  this.electionService.defaultAccount();
    this.candidatesCount = this.electionService.getCandidatesCount();
    this.candidatesList = this.electionService.getCandidatesList();
  }

  vote(id:any){
    this.votetranactionId =  this.electionService.vote(id);    
  }

}
