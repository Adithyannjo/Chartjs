import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { exampleProfitApiData } from '../backend/backend'
import { Btc } from 'src/backend/Btc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ctx: any = document.getElementById("lineChart") as HTMLElement;
  ctx1: any = document.getElementById("barChart") as HTMLElement;
  ctx3: any = document.getElementById("pieChart") as HTMLElement;

  exampleProfitApiData: any = exampleProfitApiData;
  Btc:any = Btc
  chart: any;
  constructor() { }
  ngOnInit(): void {
    this.createBarChart()
    this.pieCharts()
  }


  title = 'all-charts-models';
  datas: any = []
  profitArray: any = []
  BtcLabel:any = []
  BtcArray:any =[]
  ngAfterViewInit() {
    this.exampleProfitApiData.forEach((res: any) => {
      this.datas.push(res.date)
    })

    this.exampleProfitApiData.forEach((res: any) => {
      this.profitArray.push(res.profitAmount)
    })
     
     this.Btc.forEach((res:any)=>{
       this.BtcArray.push(res.profitAmount)
     })

    let ctx: any = document.getElementById("lineChart") as HTMLElement;
    var data = {
      labels: this.datas,
      datasets: [
        {
          label: "USDT ",
          data: this.profitArray,
          backgroundColor: "blue",
          borderColor: "lightblue",
          fill: false,
          lineTension: 0,
          radius: 5
        },
        {
          label: "BTC ",
          data: this.BtcArray,
          backgroundColor: "green",
          borderColor: "lightgreen",
          fill: false,
          lineTension: 0,
          radius: 5
        }
      ]
    };

    //options
    var options = {
      responsive: true,
      title: {
        display: true,
        position: "top",
        text: "Line Graph",
        fontSize: 18,
        fontColor: "#111"
      },
      legend: {
        display: true,
        position: "bottom",
        labels: {
          fontColor: "#333",
          fontSize: 16
        }
      }
    };

    //create 
    var chart = new Chart(ctx, {
      type: "line",
      data: data,
      options: options
    });
  }



  createBarChart() {
    const labels = ['jan', 'feb', 'march']
    let ctx1: any = document.getElementById("barchart") as HTMLElement;
    var data = {
      labels: labels,
      datasets: [
        {
          label: "USD ",
          data: [10, 50, 25, 70, 40],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: "lightblue",
          fill: false,
          lineTension: 0,
          radius: 5
        },
        // {
        //   label: "TeamB Score",
        //   data: [20, 35, 40, 60, 50],
        //   backgroundColor: "green",
        //   borderColor: "lightgreen",
        //   fill: false,
        //   lineTension: 0,
        //   radius: 5
        // }
      ]
    };

    
    var options = {
      responsive: true,
      title: {
        display: true,
        position: "top",
        text: "Line Graph",
        fontSize: 18,
        fontColor: "#111"
      },
      legend: {
        display: true,
        position: "bottom",
        labels: {
          fontColor: "#333",
          fontSize: 16
        }
      }
    };

    //create 
    var chart = new Chart(ctx1, {
      type: "bar",
      data: data,
      options: options
    })
  }

  //Pie Chart

  pieCharts() {
    const labels = ['loss', 'Profit', 'Trade']
    let ctx3: any = document.getElementById("piechart") as HTMLElement;
    var data = {
      labels: labels,
      datasets: [
        {
          label: "USD ",
          data: [10, 50, 25],
          backgroundColor: [
            'rgb(255, 99, )',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 45
        },
        // {
        //   label: "TeamB Score",
        //   data: [20, 35, 40, 60, 50],
        //   backgroundColor: "green",
        //   borderColor: "lightgreen",
        //   fill: false,
        //   lineTension: 0,
        //   radius: 5
        // }
      ]
    };

    //options
    var options = {
      responsive: true,
      title: {
        display: true,
        position: "top",
        text: "Line Graph",
        fontSize: 18,
        fontColor: "#111"
      },
      legend: {
        display: true,
        position: "bottom",
        labels: {
          fontColor: "#333",
          fontSize: 16
        }
      }
    };

    //create 
    var chart = new Chart(ctx3, {
      type: "pie",
      data: data,
      options: options
    })
  }


}
