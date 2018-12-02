import { Component, Input, OnInit, HostBinding, HostListener, ElementRef, ViewChild, AfterViewInit , Inject} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private el: ElementRef, @Inject(DOCUMENT) private document: Document) { }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset
      // console.log(scrollPosition);

    }

  ngOnInit() {
    // console.log(this.el.nativeElement.getBoundingClientRect());
    // console.log(this.document.body.scrollTop);
  }

}
