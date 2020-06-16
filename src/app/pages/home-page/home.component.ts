import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { BitcoinService } from '../../services/bitcoin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user;
  btcRate;

  constructor(private userService: UserService, private bitcoinService: BitcoinService) {
  }

  async ngOnInit() {
    this.user = this.userService.getUser();
    if (this.user.moves.length > 3) {
      this.user.moves = this.user.moves.splice(this.user.moves.length - 3)
    }
    this.btcRate = await this.bitcoinService.getRate();
  }

}
