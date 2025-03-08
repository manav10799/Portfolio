import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  experience:Number = 0;
  name:string = '';
  count:number = 0;

  constructor() {
    this.typeWriter();
  }

  ngOnInit() {
    const newDate = new Date().getTime() - new Date("August 08, 2021").getTime();
    this.experience = parseFloat((newDate / (1000 * 3600 * 24 * 365.25)).toFixed(1));
  }
  
  typeWriter() {
    let nameString = "Manav Arora";
    if(this.count === nameString.length) {
      this.count = 0;
      this.name = '';
    }
    if(this.count < nameString.length) {
      this.name += nameString.charAt(this.count);
      this.count++;
      setTimeout(()=> this.typeWriter(), 150);
    }
  }
  

}
