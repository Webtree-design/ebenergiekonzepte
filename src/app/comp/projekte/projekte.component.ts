import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-projekte',
  templateUrl: './projekte.component.html',
  styleUrls: ['./projekte.component.scss'],
})
export class ProjekteComponent {
  public news = this.dataService.news;
  constructor(public dataService: DataService) {}
  ngOnInit() {}

  public formattedDateString(dateString: any) {
    const date = new Date(dateString);

    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };

    const formattedDate = date.toLocaleDateString('de-DE', options);
    return formattedDate;
  }
}
