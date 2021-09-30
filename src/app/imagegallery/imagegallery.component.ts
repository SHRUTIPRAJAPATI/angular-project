import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-imagegallery',
  templateUrl: './imagegallery.component.html',
  styleUrls: ['./imagegallery.component.scss']
})
export class ImagegalleryComponent implements OnInit {

  imagesData: any;
  imagesData1: any;
  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit(){
    this.getImagesForDisplay();
  }

  getImagesForDisplay(){
      this.imagesData = this.imageService.getImages1();
  }

  loadMore(){
      this.imagesData1 = this.imageService.getImages2();
  }

}
