import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  ViewChild,
} from '@angular/core';
import { DataService } from './services/data.service';
import { Dialog, DialogModule, DialogRef } from '@angular/cdk/dialog';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ebenergiekonzepte';
  public toolbarStyle: any = 'ngStyleAfter';
  firmenmail = 'mail.de';
  width: number = 0;
  public message: any = [];
  public news: any = [];

  one: String = '';
  two: String = '';
  three: String = '';
  four: String = '';
  five: String = '';
  fragment: any;

  constructor(
    public dataService: DataService,
    public dialog: Dialog,
    private router: Router,
    private elementRef: ElementRef,
    public snackBar: MatSnackBar,
    private route: ActivatedRoute,
    public meta: Meta
  ) {
    this.addMeta();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    this.width = window.innerWidth;
    // this.checkElementViewport();
  }
  @HostListener('window:load', ['$event'])
  onLoad(event: any) {
    this.width = window.innerWidth;
  }

  async ngOnInit() {
    this.message = [];
    this.news = [];
    await this.getMessage();
    this.getNews();
  }

  addMeta() {
    this.meta.addTags([
      {
        name: 'title',
        content: 'EB Energiekonzepte',
      },
      {
        name: 'description',
        content:
          'Kontaktieren Sie uns für eine schnelle Terminabsprache | EB-Energiekonzepte GmbH | Westring 6d Dissen am Teutoburger Wald | Gerne beantworten wir Fragen rund um Ihr Energie-Projekt | Jetzt Termin vereinbaren und beraten lassen!',
      },
      {
        name: 'keywords',
        content:
          'Solarenergie, Photovoltaik, Solaranlagen, Solarzellen, erneuerbare Energie, Solarstrom, Solarinstallation, Solartechnik, Solarpanel, nachhaltige Energie, Sonnenenergie, Solarmodule, Solarbetriebene Systeme, Solarfirmen, Solarindustrie, Umweltfreundliche Energie, grüne Energie, Solarheizung, Solarspeicher, Energieeffizienz, Solarberatung',
      },
      {
        name: 'robots',
        content: 'index, follow',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        name: 'geo.region',
        content: 'DE',
      },
      {
        name: 'organization',
        content: 'EB-Energiekonzepte',
      },
      {
        name: 'audience',
        content: 'Unternehmen im Bereich erneuerbare Energien',
      },
      //OG TAGS (Open Graph)
      {
        name: 'og:title',
        content:
          'EB Energiekonzepte - Solar & Photovoltaik aus Dissen und Ihrer Umgebungs',
      },
      {
        name: 'og:description',
        content:
          'Kontaktieren Sie uns für eine schnelle Terminabsprache | EB-Energiekonzepte GmbH | Westring 6d Dissen am Teutoburger Wald | Gerne beantworten wir Fragen rund um Ihr Energie-Projekt | Jetzt Termin vereinbaren und beraten lassen!',
      },
      {
        name: 'og:image',
        content:
          'https://demotwo.webtreedesign.de/assets/ebenergiekonzepte/Logo_Ai[508].png',
      },
      {
        name: 'og:url',
        content: 'https://demotwo.webtreedesign.de/start',
      },
      {
        name: 'og:type',
        content: 'website',
      },
    ]);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  public async getMessage() {
    this.dataService.getMessage().subscribe((res: any) => {
      if (res.length <= 0 || res.length == undefined) return;
      res.forEach((el: any) => {
        this.message.push(el);
      });
      // this.openDialog();
      this.openSnackBar(this.message[0].title, 'OK!');
    });
  }

  public getNews() {
    this.dataService.getNews();
  }

  // private checkElementViewport() {
  //   const myElement =
  //     this.elementRef.nativeElement.querySelector('#routerOutlet');

  //   const bounding = myElement.getBoundingClientRect();
  //   // console.log(bounding.top);
  //   if (bounding.top < 0) {
  //     this.toolbarStyle = 'ngStyleAfter';
  //   } else {
  //     this.toolbarStyle = 'ngStyleBefore';
  //   }
  // }
}
