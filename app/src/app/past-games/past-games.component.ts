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
  selector: 'app-past-games',
  templateUrl: './past-games.component.html',
  styleUrls: ['./past-games.component.css'],
  animations: [
    trigger('moveUp', [
      transition('* => show', [
        useAnimation(animations.moveUp, {
          params: {time: '1s', start: '50px', end: '0px'}})
      ]),
    ]),   
    trigger('fadeIn', [
      transition('* => show', [
        useAnimation(animations.fade)
      ]),
    ]),
  ]
})
export class PastGamesComponent implements OnInit {

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
