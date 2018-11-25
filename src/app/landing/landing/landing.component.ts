import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  data1: any;
  data2: any;
  data3: any;
  data4: any;

    constructor() {
        this.data1 = {
            datasets: [{
                data: [
                    1.8,
                    8,
                    6.4,
                    4.2,
                    7.9,
                    2.1,

                    
                ],
                backgroundColor: [
                    "#FF6384",
                    "#4BC0C0",
                    "#FFCE56",
                    "#E7E9ED",
                    "#36A2EB",
                    "#FFFFFF"
                ],
                label: 'My dataset'
            }],
            labels: [
                "Romania",
                "Irlanda",
                "Franta",
                "Spania",
                "Suedia",
                "Bulgaria"
            ]
        }

        this.data2 = {
          datasets: [{
              data: [
                  1.8,
                  8,
                  6.4,
                  4.2,
                  7.9,
                  2.1,

                  
              ],
              backgroundColor: [
                  "#FF6384",
                  "#4BC0C0",
                  "#FFCE56",
                  "#E7E9ED",
                  "#36A2EB",
                  "#FFFFFF"
              ],
              label: 'My dataset'
          }],
          labels: [
              "Romania",
              "Irlanda",
              "Franta",
              "Spania",
              "Suedia",
              "Bulgaria"
          ]
      }

          this.data3 = {
            datasets: [{
                data: [
                    1.8,
                    8,
                    6.4,
                    4.2,
                    7.9,
                    2.1,

                    
                ],
                backgroundColor: [
                    "#FF6384",
                    "#4BC0C0",
                    "#FFCE56",
                    "#E7E9ED",
                    "#36A2EB",
                    "#FFFFFF"
                ],
                label: 'My dataset'
            }],
            labels: [
                "Romania",
                "Irlanda",
                "Franta",
                "Spania",
                "Suedia",
                "Bulgaria"
            ]
        }

        this.data4 = {
          datasets: [{
              data: [
                  1.8,
                  8,
                  6.4,
                  4.2,
                  7.9,
                  2.1,

                  
              ],
              backgroundColor: [
                  "#FF6384",
                  "#4BC0C0",
                  "#FFCE56",
                  "#E7E9ED",
                  "#36A2EB",
                  "#FFFFFF"
              ],
              label: 'My dataset'
          }],
          labels: [
              "Romania",
              "Irlanda",
              "Franta",
              "Spania",
              "Suedia",
              "Bulgaria"
          ]
      }
    }

  ngOnInit() {
  }

}
