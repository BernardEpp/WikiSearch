import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-list.component.html',
  styleUrl: './page-list.component.css'
})
export class PageListComponent {
  @Input() pages: Array<{ title: string, wordcount: number, snippet: string, pageid: string}> = [];
}
