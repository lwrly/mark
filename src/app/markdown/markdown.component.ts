import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MDService } from './markdown.service';

const MARKDOWN_PLACEHOLDER = `# We <3 markdown!`;

@Component({
  selector: 'mark',
  template: `
<ul class="nav nav-tabs bg-light border rounded-top">
  <li class="nav-item">
    <a class="nav-link" [ngClass]="{ 'active' : !preview }" (click)="preview = false" [routerLink]=""><i class="fa fa-pen"></i>&nbsp;Edit</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" [ngClass]="{ 'active' : preview }" (click)="preview = true" [routerLink]=""><i class="fa fa-eye"></i>&nbsp;Preview</a>
  </li>
</ul>
<div class="border rounded-bottom border-right-0" id="markdown-editor">
  <textarea class="bg-white" rows="25" [placeholder]="placeholder" (keyup)="onValueChange($event)" *ngIf="!preview"></textarea>
  <div [innerHtml]="compiled" *ngIf="preview"></div>
</div>
  `,
  styleUrls: ['./markdown.component.css']
})
export class MarkdownComponent implements OnInit {
  @Output() valueChanged = new EventEmitter<string>();
  @Input() compiled: string;
  @Input() placeholder: string;

  preview: boolean = false;

  constructor(private md: MDService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void { 
  	if(!this.placeholder) {
  	  this.placeholder = MARKDOWN_PLACEHOLDER;
  	} 
  }

  onValueChange(e) {
    const body = e.target.value;

    if (!body) {
      return this.valueChanged.emit(this.placeholder); //reset
    } else {
      this.valueChanged.emit(body);
    }
  }
}
