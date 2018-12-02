import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  @Input() 
  basePath: string;

  @Input()
  images: string[];
  constructor() { }

  ngOnInit() {
  }

}
