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
import * as imageData from '../../assets/data/snakeybus-images.json';
@Component({
  selector: 'app-snakeybus',
  templateUrl: './snakeybus.component.html',
  styleUrls: ['./snakeybus.component.css'],
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
export class SnakeybusComponent implements OnInit {

  imageBasePath = '../../assets/images/snakeybus/';
  images: string[];

  isShow: boolean;

  constructor(private el: ElementRef, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.images = imageData.images;
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (this.isShow) { return; }
    const componentPosition = this.el.nativeElement.getBoundingClientRect().top;
    this.isShow = componentPosition < this.document.documentElement.clientHeight;
  }

}
