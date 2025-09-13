import { AfterViewInit, Component, ElementRef, ViewChild, afterNextRender } from '@angular/core';



@Component({
  selector: 'app-stocks-component',
  imports: [],
  templateUrl: './stocks-component.html',
  styleUrl: './stocks-component.scss'
})
export class StocksComponent implements AfterViewInit{
  @ViewChild('myIdRef') container!: ElementRef;
  widgetElement: unknown;
  //script = document.createElement("script");
  stockSymbols:any = null;
  stocksProps:any = {
    "lineWidth": 2,
    "lineType": 0,
    "chartType": "candlesticks",
    "showVolume": true,
    "fontColor": "rgb(106, 109, 120)",
    "gridLineColor": "rgba(46, 46, 46, 0.06)",
    "volumeUpColor": "rgba(34, 171, 148, 0.5)",
    "volumeDownColor": "rgba(247, 82, 95, 0.5)",
    "backgroundColor": "#ffffff",
    "widgetFontColor": "#0F0F0F",
    "upColor": "#22ab94",
    "downColor": "#f7525f",
    "borderUpColor": "#22ab94",
    "borderDownColor": "#f7525f",
    "wickUpColor": "#22ab94",
    "wickDownColor": "#f7525f",
    "colorTheme": "light",
    "isTransparent": false,
    "locale": "en",
    "chartOnly": false,
    "scalePosition": "right",
    "scaleMode": "Normal",
    "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
    "valuesTracking": "1",
    "changeMode": "price-and-percent",
    "symbols": [],
    "dateRanges": [
      "1d|1",
      "1m|30",
      "3m|60",
      "12m|1D",
      "60m|1W",
      "all|1M"
    ],
    "fontSize": "10",
    "headerFontSize": "medium",
    "autosize": true,
    "width": "100%",
    "height": "100%",
    "noTimeScale": false,
    "hideDateRanges": false,
    "showMA": true,
    "maLength": 9,
    "maLineColor": "#2962FF",
    "maLineWidth": 1,
    "hideMarketStatus": false,
    "hideSymbolLogo": false
  }
  constructor(){
    const symbols = [
      [
      "NSE:IZMO|1D"
      ],
      [
        "NSE:OLAELEC|1D"
      ],
      [
        "NSE:SBIN|1D"
      ],
      [
        "NSE:ETERNAL|1D"
      ]
    ];
    this.stocksProps.symbols.push(symbols);
    // afterNextRender(() => {
    //   this.script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    //   this.script.type = "text/javascript";
    //   this.script.async = true;
    //   this.script.innerHTML = `${this.stocksProps}`;
    //   (HTMLDivElement)this.widgetElement.appendChild(this.script);
    // });
  }
  ngAfterViewInit(): void {
    this.widgetElement = this.container.nativeElement;
    
  }

}
