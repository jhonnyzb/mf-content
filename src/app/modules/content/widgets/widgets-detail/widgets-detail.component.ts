import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getSession } from 'src/app/core/encryptData';
import { BoardEntityModel, ListBoardsResponseModel } from 'src/app/core/models/response/listBoardsResponse.model';
import { LoginValeproResponseModel } from 'src/app/core/models/response/loginValeproResponse.model';

@Component({
  selector: 'app-widgets-detail',
  templateUrl: './widgets-detail.component.html'
})
export class WidgetsDetailComponent implements OnInit {
  widget: any;
  stringParams: any;
  listWidgets: BoardEntityModel[] = [];
  widgetId!: number;
  user: LoginValeproResponseModel = getSession<LoginValeproResponseModel>('accountValepro');

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.widgetId = (params as any).params.id;
    });
    this.user = getSession<LoginValeproResponseModel>('accountValepro');
  }
  async ngOnInit() {
    while (this.listWidgets.length === 0) {
      await this.delay(100);
      const allSections = getSession<ListBoardsResponseModel>('sections');
      if (allSections && allSections.boardEntities) {
        allSections.boardEntities.forEach(entity => {
          if (entity.boardTypeId === 1) {
            this.listWidgets.push(entity);
            this.showWidgets();
          }
        });
      }
    }

    this.stringParams = '?IDPrograma=' + this.user.ProgramId + '&IDPersona=' +
      this.user.PersonId + '&IDCuenta=' + this.user.AccountId +
      '&Token=' + this.user.AccessToken;
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  showWidgets(): void {
    this.widget = this.listWidgets.find((n) => {
      return n.boardId == this.widgetId;
    });
  }

}
