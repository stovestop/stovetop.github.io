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
  selector: 'app-section-head',
  templateUrl: './section-head.component.html',
  styleUrls: ['./section-head.component.css'],
  animations: [
    trigger('moveUp', [
      transition('* => show', [
        useAnimation(animations.slideDown)
      ]),
    ]),   
  ]
})
export class SectionHeadComponent implements OnInit {
  @Input()
  tag: string

  isShow: boolean;

  constructor(private el: ElementRef, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {}

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.getBoundingClientRect().top;
    this.isShow = componentPosition < this.document.documentElement.clientHeight;
  }

}
