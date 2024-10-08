import { Component, OnInit } from "@angular/core";
import { BoardEntityModel } from "src/app/core/models/response/listBoardsResponse.model";
import { PageUtil } from "src/app/core/utils/PageUtil";

@Component({
  selector: "app-news-list-detail",
  templateUrl: "./news-list-detail.component.html"
})
export class NewsListDetailComponent implements OnInit {
  news!: BoardEntityModel;

  constructor(
    private pagesUtil: PageUtil
  ) {
  }

  ngOnInit(): void {
    this.news =  this.pagesUtil.getSelectedNews();
  }
}
