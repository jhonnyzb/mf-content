import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getSession } from 'src/app/core/encryptData';
import { GTMSelectContent } from 'src/app/core/models/gtm/gtmSelectContent.model';
import { BoardEntityModel, ListBoardsResponseModel } from 'src/app/core/models/response/listBoardsResponse.model';
import { LoginValeproResponseModel } from 'src/app/core/models/response/loginValeproResponse.model';
import { PageUtil } from 'src/app/core/utils/PageUtil';
import { UtilsTitle } from 'src/app/core/utils/UtilsTitle';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  newsShowed: any = [];
  totalItems: number = 0;
  pageSize: number = 3;
  currentPage: number = 1;
  listNews: BoardEntityModel[] = [];
  user: LoginValeproResponseModel = getSession<LoginValeproResponseModel>('accountValepro');

  constructor(
    private router: Router,
    private pagesUtil: PageUtil,
    private utilsTitle: UtilsTitle
  ) {
    this.utilsTitle.suscribeRoutesTitle();
    this.user = getSession<LoginValeproResponseModel>('accountValepro');
   }

  async ngOnInit() {
    while (this.listNews.length === 0) {
      await this.delay(100);
      const allSections = getSession<ListBoardsResponseModel>('sections');
      if (allSections && allSections.boardEntities) {
        allSections.boardEntities.forEach(entity => {
          if (entity.boardTypeId === 3) {
            this.listNews.push(entity);
            this.showNewsList();
          }
        });
      }
    }
    this.totalItems = this.listNews.length
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  showNews(newsSelected: BoardEntityModel) {
    this.pagesUtil.setSelectedNews(newsSelected);
    this.sendGtmNewsData(newsSelected);
    this.router.navigateByUrl('main/newsList/detail/' + newsSelected.boardId)
  }

  pageChanged(page: number) {
    this.currentPage = page;
    this.showNewsList();
  }

  showNewsList() {
    let pageIndex = this.currentPage - 1;
    this.newsShowed = this.listNews.slice(
      this.pageSize * pageIndex,
      this.pageSize * pageIndex + this.pageSize
    );
  }

  sendGtmNewsData(newsSelected: BoardEntityModel) {
    let tagData: GTMSelectContent = {
      event: "select_content",
      ParameterTarget: "Noticias",
      ParameterLocation: "Listado Noticias",
      ParameterType: "Imagen",
      ParameterCategory: "Noticias",
      IDAccount: this.user.AccountId,
      UserName: this.user.UserName,
      IDProgram: this.user.ProgramId,
      IDPerson: this.user.PersonId,
      ParameterText: newsSelected.name,
      ParameterItemID: newsSelected.boardId.toString(),
      Currency: '',
      value: ''
    };
    window.parent.postMessage(JSON.stringify(tagData), '*');
  }

}
