import {
  Component
} from '@angular/core';
// import { isPlatformBrowser } from '@angular/common';
// import {
//   ElementRef,
//   HostListener,
//   Inject,
//   PLATFORM_ID,
//   ViewChild,
// } from '@angular/core';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.scss'],
})
export class CaruselComponent {
  // public imageWidth: any; // carusel icons sind noch ein bug
  // width: any;
  // private isBrowser: any;
  // constructor(
  //   public router: Router,
  //   @Inject(PLATFORM_ID) platformId: string,
  //   public dataService: DataService
  // ) {
  //   this.isBrowser = isPlatformBrowser(platformId);
  // }
  // @ViewChild('image') slider!: NgImageSliderComponent;

  // ngAfterViewInit() {
  //   // const x = this.section.nativeElement;
  //   // const rect = x.getBoundingClientRect();
  //   // const width = rect.right - rect.left;
  //   // console.log(width);
  //   // this.imageWidth = width;
  // }

  // imageObject: any = [
  //   {
  //     image: '../../../../assets/Harley.png',
  //     thumbImage: '../../../../assets/Harley.png',
  //     alt: 'Harley',
  //     title: 'Harley',
  //     src: 'www.demoone.ebenergiekonzepte.de',
  //   },
  //   {
  //     image: '../../../../assets/Juwelier.png',
  //     thumbImage: '../../../../assets/Juwelier.png',
  //     alt: 'Juwelier',
  //     title: 'Juwelier',
  //     src: 'www.juwelier-breuch.de',
  //   },
  //   {
  //     image: '../../../../assets/Solar.png',
  //     thumbImage: '../../../../assets/Solar.png',
  //     alt: 'Solar',
  //     title: 'Solar',
  //     src: 'www.eb-energiekonzepte.de',
  //   },
  // ];

  // imageSliderClick(event: any) {
  //   return;
  //   if (this.isBrowser) {
  //     switch (event) {
  //       case 0:
  //         window.location.href = 'https://demoone.ebenergiekonzepte.de';
  //         break;
  //       case 1:
  //         window.location.href = 'https://juwelier-breuch.de';
  //         break;
  //       case 2:
  //         window.location.href = 'https://eb-energiekonzepte.de';
  //         break;
  //     }
  //   }
  // }

  // prevImageClick() {
  //   this.slider.prev();
  // }

  // nextImageClick() {
  //   this.slider.next();
  // }
}
