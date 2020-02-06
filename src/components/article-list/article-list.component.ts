import { Component, OnInit } from '@angular/core';
import { APIService } from '../../api.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: Array<any>
  pageActual: number
  modalShow: boolean

  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.BuildList();
  }
  
  modalController(articleClicked = <any>[]){
    this.modalShow = true
    
    const  { _id, section_name, web_url } = articleClicked


    console.log('Infos', _id, section_name)
  }



 BuildList() {
    this.apiService.getArticles().subscribe((article: any) => {
      this.articles = article.response.docs;
    });
  }

}
