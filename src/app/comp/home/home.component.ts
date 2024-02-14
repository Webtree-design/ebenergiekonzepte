import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(public meta: Meta) {
    this.updateMeta();
  }

  updateMeta() {
    this.meta.updateTag({
      name: 'title',
      content: 'EB Energiekonzepte - start',
    });
  }
}
