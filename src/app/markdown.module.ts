import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MDService } from './markdown/markdown.service';
import { MarkdownComponent } from './markdown/markdown.component';

@NgModule({
  declarations: [MarkdownComponent],
  exports: [MarkdownComponent],
  imports: [CommonModule, RouterModule],
  providers: [MarkdownModule]
})
export class MarkdownModule { 
  static forRoot(): ModuleWithProviders<MarkdownModule> {
    return {
      ngModule: MarkdownModule,
      providers: [MDService]
    }
  }
}
