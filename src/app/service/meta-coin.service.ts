import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const Web3 = require('web3');
const metaincoinArtifacts = 'assets/abi/MetaCoin.json';


@Injectable({
  providedIn: 'root'
})
export class MetaCoinService {
  web3: any;
  contract: any;

  constructor(private http: HttpClient) {
    this.checkAndInstantiateWeb3();
  }

  public async checkAndInstantiateWeb3() {
    await this.http.get(metaincoinArtifacts).subscribe((res: Response) => {
      try {
        this.web3 = new Web3(new Web3.providers.HttpProvider(environment.Contract.HttpProvider));
        this.web3.eth.defaultAccount = this.web3.eth.coinbase;
        // tslint:disable-next-line: no-string-literal
        this.contract = this.web3.eth.contract(res['abi']).at(environment.Contract.MetaCoin);
      }
      catch (ex) {
        alert(ex);
      }
    });
  }

  getAccounts(): Observable<any> {
    return Observable.create(observer => {
      this.web3.eth.getAccounts((err, accs) => {
        if (err != null) {
          observer.error('There was an error fetching your accounts.')
        }

        if (accs.length === 0) {
          observer.error('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.')
        }

        observer.next(accs)
        observer.complete()
      });
    })
  }

  getBalance(account): Observable<number> {
    return Observable.create(observer => {

      this.contract.getBalance(account, {
        from: account
      })
        .then(value => {
          observer.next(value)
          observer.complete()
        })
        .catch(e => {
          console.log(e);
          observer.error(e)
        });
    })
  }

  sendCoin(from, to, amount): Observable<any> {

    return Observable.create(observer => {
      this.contract.sendCoin(to, amount, {
        from: from
      })
        .then(() => {
          observer.next()
          observer.next()
        })
        .catch(e => {
          console.log(e);
          observer.error(e)
        });
    })
  }

}
