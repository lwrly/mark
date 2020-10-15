import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MDService } from './markdown.service';
import { MarkdownComponent } from './markdown.component';

@NgModule({
  declarations: [MarkdownComponent],
  exports: [MarkdownComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [MDService]
})
export class MarkdownModule { }
