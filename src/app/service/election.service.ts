import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
const Web3 = require('web3');
const electionArtifacts = 'assets/abi/Election.json';


@Injectable({
  providedIn: 'root'
})
export class ElectionService {
  private web3: any;
  counterContract: any;
  candidatesCount: any;

  constructor(private http: HttpClient) {
    this.checkAndInstantiateWeb3();
  }

  public async checkAndInstantiateWeb3() {
    await this.http.get(electionArtifacts).subscribe((res: Response) => {
      try {
        this.web3 = new Web3(new Web3.providers.HttpProvider(environment.Contract.HttpProvider));
        this.web3.eth.defaultAccount = this.web3.eth.coinbase;
        // tslint:disable-next-line: no-string-literal
        this.counterContract = this.web3.eth.contract(res['abi']).at(environment.Contract.Election);
      }
      catch (ex) {
        alert(ex);
      }
    });
  }

  public defaultAccount(): any {
    return this.web3.eth.coinbase.toString();
  }

  public addCandidate(name: string): any {
    let transaction = this.counterContract.addCandidate(name).toString();
    return transaction;
  }

  public getCandidatesCount(): any {
    console.log(this.counterContract);
    this.candidatesCount = this.counterContract.candidatesCount().toString();
    return this.candidatesCount;
  }

  public getCandidatesList(): any {
    let list = [];
    for (var i = 1; i <= this.candidatesCount; i++) {
      this.counterContract.candidates(i, (err: any, res: Response) => {
        let candidate = {
          id: res[0].c[0],
          name: res[1],
          voteCount: res[2].c[0]
        };
        list.push(candidate);
      });
    }
    console.log(list);
    return list;
  }

  public vote(id): any {
    try {
      let transaction = this.counterContract.vote(id).toString();
      return transaction;
    }
    catch (exp) {
      alert("already Voted");
    }
  }

}
