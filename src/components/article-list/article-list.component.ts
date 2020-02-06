import { Component, OnInit } from '@angular/core';
import { APIService } from '../../api.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: Array<any>

  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.BuildList();
  }

  openModal(){
    console.log('AEEEEE')
  }

 BuildList() {
    this.apiService.getArticles().subscribe((article: any) => {
      this.articles = article.response.docs;
    });
  }

}
