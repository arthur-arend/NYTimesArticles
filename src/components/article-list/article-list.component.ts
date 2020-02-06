import { Component, OnInit } from '@angular/core';
import { APIService } from '../../api.service';
import { MatDialog } from '@angular/material';
import { ArticleDialogComponent } from '../article-dialog/article-dialog.component';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: Array<any>
  pageActual: number
  modalShow: boolean

  constructor(private apiService: APIService, public dialog: MatDialog) { }

  ngOnInit() {
    this.BuildList();
  }

  
  openDialog(articleClicked): void {
    const dialogRef = this.dialog.open(ArticleDialogComponent, {
      data: articleClicked
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

 BuildList() {
    this.apiService.getArticles().subscribe((article: any) => {
      this.articles = article.response.docs;
    });
  }

}
