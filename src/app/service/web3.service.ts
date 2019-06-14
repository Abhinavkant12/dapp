import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const Web3 = require('web3');
declare var window: any;

@Injectable({
    providedIn: 'root'
})
export class Web3Service {
    public web3Provider: any;
    httpProvider = 'http://localhost:8545';

    web3: any;
    CounterContract: any;
    contractInstance: any;
    constructor(private http: HttpClient) {
        this.checkAndInstantiateWeb3();
    }

    checkAndInstantiateWeb3 = () => {
        this.http.get('../build/contracts/Election.json').subscribe(abi => {
            this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
            this.CounterContract = this.web3.eth.contract(abi);
            //   this.CounterContract = this.web3.eth.contract(abi.json());
            this.contractInstance = this.CounterContract.at('0xC3Ea12ca02307983efFdBcA96ef8a9Be6dFA9Cfe');
            // this.count = this.contractInstance.getCounts.call().toString();
        });

        // // Checking if Web3 has been injected by the browser (Mist/MetaMask)
        // if (typeof window.web3 !== 'undefined') {
        //     // tslint:disable-next-line: max-line-length
        //     console.warn('Using web3 detected from external source. If you find that your accounts don\'t appear or you have 0 MetaCoin, ensure you\'ve configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask');
        //     // Use Mist/MetaMask's provider
        //     this.web3Provider = new Web3(window.web3.currentProvider);
        // } else {
        //     // tslint:disable-next-line: max-line-length
        //     console.warn('No web3 detected. Falling back to ${this.httpProvider}. You should remove this fallback when you deploy live, as it\'s inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask');
        //     // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        //     this.web3Provider = new Web3(
        //         new Web3.providers.HttpProvider(this.httpProvider)
        //     );
        // }
    }

    getAccounts(): Observable<any> {
        return Observable.create(observer => {
            this.web3Provider.eth.getAccounts((err, accs) => {
                if (err != null) {
                    observer.error('There was an error fetching your accounts.');
                }

                if (accs.length === 0) {
                    observer.error('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
                }

                observer.next(accs);
                observer.complete();
            });
        });
    }
}
