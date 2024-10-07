import { Component, OnInit } from '@angular/core';
import destinationsData from '../../data/destinations.json'
import { IDestination } from '../idestination';
import { CardComponent } from '../card/card.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

})
export class HomeComponent implements OnInit {
  destinations: any = destinationsData;



  ngOnInit() {

    // this.createCards();
  }

  createCards(): void {
    // console.log(("create Card"));

    this.destinations.forEach((value: IDestination) => {
      console.log(value);

    });
  }

  OnClick(): void {
    // console.log(destination.name);

  }
}

