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
  counter: number = 0

  constructor(private apiService: APIService, public dialog: MatDialog) { }

  ngOnInit() {
    this.BuildList(this.counter)
  }

  nextPage(){
    this.counter++

    this.BuildList(this.counter)
    console.log(this.counter)
  }

  previousPage(){
    if(this.counter > 0){
      this.counter--
      
      this.BuildList(this.counter)
      console.log(this.counter)

    }
}
  
  openDialog(articleClicked): void {
    const dialogRef = this.dialog.open(ArticleDialogComponent, {
      data: articleClicked
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
    });
  }

 BuildList(page) {
    this.apiService.getArticles(this.counter).subscribe((article: any) => {
      this.articles = article.response.docs
    });
  }

}
