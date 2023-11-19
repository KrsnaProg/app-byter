import { Component,ElementRef, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isTeamRoute: boolean = false;

  constructor(private router: Router, private elementRef: ElementRef) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.urlAfterRedirects;
        this.isTeamRoute = (currentRoute === '/team');
      }
    });
  }

  
  scrollToSelectedDiv(id: string) {
    setTimeout(() => {
      const worksElement = this.elementRef.nativeElement.ownerDocument.getElementById(id);
    if (worksElement) {
      worksElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const scrollPosition = worksElement.getBoundingClientRect().top + window.scrollY - 50;
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
      }
  },10);
}
}
