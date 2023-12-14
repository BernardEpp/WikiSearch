import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { PageListComponent } from "./page-list/page-list.component";
import { WikipediaService } from './wikipedia.service';
import { HttpClientModule, HttpResponse } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, SearchBarComponent, PageListComponent, HttpClientModule]
})
export class AppComponent {
  pages: Array<{}> = [];

  /**
   *
   */
  constructor(private wikipedia: WikipediaService) {
  }
  onTerm(term: string) {
   this.wikipedia.search(term).subscribe((pages) => {
    this.pages = pages;
   })
  }
  
}
