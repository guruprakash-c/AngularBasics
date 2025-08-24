import { Component } from '@angular/core';
import { NseIndia } from 'stock-nse-india';

@Component({
  selector: 'app-stocks-component',
  imports: [],
  templateUrl: './stocks-component.html',
  styles: ``
})
export class StocksComponent {
  nseIndia = new NseIndia();
  stockSymbols:any = null;
  getAllStockSymbols():void{
    this.stockSymbols = this.nseIndia.getAllStockSymbols();
    console.log('stock symbols: ', this.stockSymbols);
  }
}
