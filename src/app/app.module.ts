import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MatCardModule, MatDialogModule, MatButtonModule } from '@angular/material';
import { ArticleListComponent } from '../components/article-list/article-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { ArticleDialogComponent } from '../components/article-dialog/article-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    NgxPaginationModule
    
  ],
  entryComponents:[
    ArticleDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
