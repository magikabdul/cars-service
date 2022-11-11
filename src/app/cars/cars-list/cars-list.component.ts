import { Component, OnInit } from '@angular/core';
import {Car} from "../model/car";

@Component({
  selector: 'cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {

  cars : Car[] = [
    {
      id: 1,
      model: "Honda RX",
      plate: "KR4432D5",
      deliveryData: "21-04-2011",
      deadline: "05-05-2011",
      client: {
        firstName: "Jan",
        lastName: "Kowalski",
      },
      cost: 300,
      isFullyDamaged: true
    },
    {
      id: 2,
      model: "Mazda RX",
      plate: "WSC42D5",
      deliveryData: "22-11-2012",
      deadline: "06-11-2022",
      client: {
        firstName: "Henryk",
        lastName: "Dąbrowski",
      },
      cost: 1300,
      isFullyDamaged: false
    },
    {
      id: 3,
      model: "Opel Corsa",
      plate: "GD554KL",
      deliveryData: "21-04-2011",
      deadline: "05-05-2011",
      client: {
        firstName: "Anna",
        lastName: "Zielona",
      },
      cost: 100,
      isFullyDamaged: true
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
