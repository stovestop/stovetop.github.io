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
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
  animations: [
    trigger('moveUp', [
      transition('* => show', [
        useAnimation(animations.moveUp)
      ]),
    ]),   
    trigger('fadeIn', [
      transition('* => show', [
        useAnimation(animations.fade)
      ]),
    ]),
  ]
})
export class GameCardComponent implements OnInit {

  @Input()
  isDemo: boolean;

  @Input()
  scrollPos: number;

  @ViewChild('featured') card: ElementRef;

  private componentPos: number;
  isShow: boolean;

  constructor(private el: ElementRef, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.getBoundingClientRect().top;
      this.isShow = componentPosition < this.document.documentElement.clientHeight;
    }


}
