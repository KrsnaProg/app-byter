import { Component } from '@angular/core';
import { interval } from 'rxjs';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  template: `<img [src]="imageUrls[currentIndex]" alt="Image">`
})
export class CarouselComponent {
  click = false
  currentIndex: number = 0
  folder = '../../assets/apppicturesformainslider/'
  imageUrls: string[] = [
    this.folder + '1.png',
    this.folder + '2.png',
    this.folder + '3.png',
    this.folder + '4.png',
    this.folder + '5.png',
    this.folder + '6.png',
    this.folder + '7.png',
    this.folder + '8.png',
    this.folder + '9.png',
    this.folder + '10.png',
  ];

  ngOnInit() {
    interval(16950).subscribe(() => {
      if (!this.click){
        this.currentIndex++;
      }
      this.click = false
      if (this.currentIndex >= this.imageUrls.length) {
        this.currentIndex = 0;
      }
    });
  }
  nextUrl(){
    this.currentIndex++;
    this.click = true
    if (this.currentIndex >= this.imageUrls.length) {
      this.currentIndex = 0;
    }
  }
  prevUrl(){
    this.currentIndex--;
    this.click = true
    if (this.currentIndex < 0) {
      this.currentIndex = this.imageUrls.length-1;
    }

  }
}
