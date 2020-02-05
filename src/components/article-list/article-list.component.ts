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
    this.montaListaArtigos();
  }

  montaListaArtigos() {
  
    this.apiService.listar().subscribe(article => this.articles = article)
    console.log("Articles", this.articles)
  }

}
