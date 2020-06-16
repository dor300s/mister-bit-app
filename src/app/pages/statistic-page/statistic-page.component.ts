import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../../services/bitcoin.service';
import * as moment from 'moment';

@Component({
  selector: 'app-statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})
export class StatisticPageComponent implements OnInit {
  btcRate;
  btcPrice;
  btcVolume;

  chart = {
    title: 'Title',
    type: 'LineChart',
    data: [],
    columnNames: ['Time', 'Price'],
    options: {},
    width: 800,
    height: 300
  }
  
  chart2 = {
    title: 'Title',
    type: 'ColumnChart',
    data: [],
    columnNames: ['Time', 'Volume'],
    options: {},
    width: 800,
    height: 300
  }
  constructor(private bitcoinService: BitcoinService) { }

  async ngOnInit() {
    this.btcRate = await this.bitcoinService.getRate();
    this.btcPrice = await this.bitcoinService.getMarketPrice('30days');
    this.chart.title = this.btcPrice.name;
    const data = this.btcPrice.values.map(val => {
      val.x = (moment(val.x * 1000).format('L'))
      return Object.values(val)
    })
    this.chart.data = data;
    const vol = await this.bitcoinService.getConfirmedTransactions('30days');
    this.btcVolume = vol.values[vol.values.length - 1].y;
    this.chart2.title = vol.name;
    const data2 = vol.values.map(v => {
      v.x = (moment(v.x * 1000).format('L'))
      return Object.values(v)
    })
    this.chart2.data = data2;
  }

}
