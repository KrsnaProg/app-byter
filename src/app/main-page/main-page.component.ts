import { Component,ElementRef} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  constructor( private elementRef: ElementRef) { }

  scrollToSelectedDiv() {
    setTimeout(() => {
      const worksElement = this.elementRef.nativeElement.ownerDocument.getElementById("footer");
    if (worksElement) {
      worksElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const scrollPosition = worksElement.getBoundingClientRect().top + window.scrollY + 50;
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
      }
      
  },10);
  
}
  
}