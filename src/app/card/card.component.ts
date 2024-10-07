import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {

  @Input() name: string = "name";
  @Input() imgUrl: string = "imgURL";
  @Input() numberOfNights: number = 0;
  @Input() city: string = "city";


  OnClick() {
    console.log(this.name);
  }
}
