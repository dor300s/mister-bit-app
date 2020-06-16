import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  getRate(val = '1') {
    return axios.get(`https://blockchain.info/tobtc?currency=USD&value=${val}`)
      .then(res => res.data)
  }

  getMarketPrice(timespan = '5months') {
    return axios.get(`https://api.blockchain.info/charts/market-price?timespan=${timespan}&format=json&cors=true`)
      .then(res => {
        console.log(res.data);
        return res.data;
      })
  }

  getConfirmedTransactions(timespan = '5months') {
    return axios.get(`https://api.blockchain.info/charts/trade-volume?timespan=${timespan}&format=json&cors=true`)
      .then(res => {
        console.log(res.data);
        return res.data;
      })
  }
  constructor() { }
}



