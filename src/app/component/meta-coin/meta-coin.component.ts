import { Component, HostListener, NgZone } from '@angular/core';

import { MetaCoinService } from '../../service/meta-coin.service';

import { canBeNumber } from '../../util/validation';

@Component({
  selector: 'app-meta-coin',
  templateUrl: './meta-coin.component.html',
  styleUrls: ['./meta-coin.component.css']
})
export class MetaCoinComponent {

  // TODO add proper types these variables
  account: any;
  accounts: any;

  balance: number;
  sendingAmount: number;
  recipientAddress: string;
  status: string;
  canBeNumber = canBeNumber;

  constructor(
    private _ngZone: NgZone,
    private metaCoinService: MetaCoinService,
  ) {
    this.onReady();
  }

  onReady = () => {

    // Get the initial account balance so it can be displayed.
    this.metaCoinService.getAccounts().subscribe(accs => {
      this.accounts = accs;
      this.account = this.accounts[0];

      // This is run from window:load and ZoneJS is not aware of it we
      // need to use _ngZone.run() so that the UI updates on promise resolution
      this._ngZone.run(() =>
        this.refreshBalance()
      );
    }, err => alert(err))
  };

  refreshBalance = () => {
    this.metaCoinService.getBalance(this.account)
      .subscribe(value => {
        this.balance = value
      }, e => { this.setStatus('Error getting balance; see log.') })
  };

  setStatus = (message) => {
    this.status = message;
  };

  sendCoin = () => {
    this.setStatus('Initiating transaction... (please wait)');

    this.metaCoinService.sendCoin(this.account, this.recipientAddress, this.sendingAmount)
      .subscribe(() => {
        this.setStatus('Transaction complete!');
        this.refreshBalance();
      }, e => this.setStatus('Error sending coin; see log.'))
  };
}
