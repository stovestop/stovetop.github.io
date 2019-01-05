import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-screenshot',
  templateUrl: './screenshot.component.html',
  styleUrls: ['./screenshot.component.css']
})
export class ScreenshotComponent implements OnInit {

  @Input()
  image: string;

  constructor() { }

  ngOnInit() {
    console.log(this.image);
  }

}
