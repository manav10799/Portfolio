import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit {

  scrollPercent:any;
  constructor() {

  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
  }

  scroll = (): void => {
    this.scrollPercent = Math.round((document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100);
  };
  
}
