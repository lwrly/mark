import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDService } from './markdown.service';
import { MarkdownComponent } from './markdown.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MarkdownComponent],
  providers: [MDService],
  exports: [MarkdownComponent]
})
export class MarkdownModule { }
