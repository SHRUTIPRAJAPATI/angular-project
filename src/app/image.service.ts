import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  images: any;
  images1: any;

  constructor(
    private http: HttpClient
  ) { }

  getImages1(){
    return this.images = this.imageData1;
  }

  getImages2(){
    return this.images1 = this.imageData2;
  }

  imageData1 = [
    {  "id": 1,   "url": "https://via.placeholder.com/600/92c952"},
    {  "id": 2,   "url": "https://via.placeholder.com/600/771796"},
    {  "id": 3,   "url": "https://via.placeholder.com/600/24f355"},
    {  "id": 4,   "url": "https://via.placeholder.com/600/d32776"},
    {  "id": 5,   "url": "https://via.placeholder.com/600/f66b97"},
  ]

  imageData2 = [
    {  "id": 1,   "url": "https://via.placeholder.com/600/92c952"},
    {  "id": 2,   "url": "https://via.placeholder.com/600/771796"},
    {  "id": 3,   "url": "https://via.placeholder.com/600/24f355"},
    {  "id": 4,   "url": "https://via.placeholder.com/600/d32776"},
    {  "id": 5,   "url": "https://via.placeholder.com/600/f66b97"},
  ]
}
