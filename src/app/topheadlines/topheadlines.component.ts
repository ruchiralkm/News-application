import { Component } from '@angular/core';
import { TopnewsapiService } from '../service/topnewsapi.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topheadlines',
  imports: [CommonModule],
  templateUrl: './topheadlines.component.html',
  styleUrl: './topheadlines.component.css',
})
export class TopheadlinesComponent {
  constructor(private api: TopnewsapiService) {}

  //*Display Headlines Data*//
  topHeadlinesData: any = [];

  ngOnInit(): void {
    this.api.tcHeadlines().subscribe((result) => {
      console.log(result);
      this.topHeadlinesData = result.articles;
    });
  }
}
