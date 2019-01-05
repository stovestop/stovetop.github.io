import { Component, Input, OnInit, HostBinding, HostListener, ElementRef, ViewChild, AfterViewInit , Inject} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import * as animations from '../animations';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  useAnimation,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('moveUp', [
      transition('* => show', [
        useAnimation(animations.moveUp, {
          params: {time: '1s', start: '20px', end: '0px'}})
      ]),
    ]),   
    trigger('fadeIn', [
      transition('* => show', [
        useAnimation(animations.fade)
      ]),
    ]),
  ]
})
export class AboutComponent implements OnInit {

  isShow: boolean;

  constructor(private el: ElementRef, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (this.isShow) { return; }
    const componentPosition = this.el.nativeElement.getBoundingClientRect().top;
    this.isShow = componentPosition < this.document.documentElement.clientHeight;
  }

}
