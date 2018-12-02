import { Component, OnInit, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  isTitleCenter: boolean;

  constructor(@Inject(DOCUMENT) document) { }

  ngOnInit() {
  }

  scroll(elementId) {
    const el =  document.getElementById(elementId);
    if(el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = "/#" + elementId;
    }

}

}
