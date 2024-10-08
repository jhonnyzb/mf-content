import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getSession } from 'src/app/core/encryptData';
import { GTMSelectContent } from 'src/app/core/models/gtm/gtmSelectContent.model';
import { BoardEntityModel, ListBoardsResponseModel } from 'src/app/core/models/response/listBoardsResponse.model';
import { LoginValeproResponseModel } from 'src/app/core/models/response/loginValeproResponse.model';
import { UtilsTitle } from 'src/app/core/utils/UtilsTitle';
import { encrypt } from 'src/app/core/utils/sesion-util';

@Component({
  selector: 'app-widgets-list',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {
  listWidgets: BoardEntityModel[] = [];
  widgetsShowed: any = [];
  option: number = 0;
  pageSize: number = 3;
  ventanaEmergente: any;
  stringParams: any;
  user: LoginValeproResponseModel = getSession<LoginValeproResponseModel>('accountValepro');
  constructor(
    private router: Router,
    private utilsTitle: UtilsTitle
  ) {
    this.utilsTitle.suscribeRoutesTitle();
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
          this.sortWidgetsList();
        }
      });
    }
    }

    this.stringParams = '?IDPrograma=' + this.user.ProgramId + '&IDPersona=' +
      this.user.PersonId + '&IDCuenta=' + this.user.AccountId +
      '&Token=' + this.user.AccessToken;
    if (window.innerWidth < 500) {
      this.pageSize = 1;
    }
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth < 500) {
      this.pageSize = 1;
    } else {
      this.pageSize = 3;
    }
  }


  sortWidgetsList() {
    this.listWidgets.sort((a, b) => this.option == 0 ? a.displayOrder - b.displayOrder : b.displayOrder - a.displayOrder);
  }

  showWidget(widget: BoardEntityModel) {
    sessionStorage.setItem("widgetSelected", encrypt(JSON.stringify(widget), 'widgetSelected'));
    switch (widget.openingModeId) {
      case 0:
        this.router.navigateByUrl('main/widgets/detail/' + widget.boardId);
        break;
      case 1:
        this.router.navigateByUrl('main/widgets/detail/' + widget.boardId);
        break;
      case 2:
        widget.url = widget.url + this.stringParams;
        sessionStorage.setItem("widgetSelected", encrypt(JSON.stringify(widget), 'widgetSelected'));
        this.ventanaEmergente = window.open(widget.url + this.stringParams, "Detalle", "width=1200,height=800");
        break;
    }
    this.sendGtmData(widget);
  }

  sendGtmData(widget: BoardEntityModel) {
    let tagData: GTMSelectContent = {
      event: "select_content",
      ParameterTarget: "Widgets",
      ParameterLocation: "Pantalla Widgets",
      ParameterType: "Imagen",
      ParameterCategory: "Widgets",
      IDAccount: this.user.AccountId,
      UserName: this.user.UserName,
      IDProgram: this.user.ProgramId,
      IDPerson: this.user.PersonId,
      ParameterText: widget.name,
      ParameterItemID: widget.boardId.toString(),
      Currency: '',
      value: ''
    };
    window.parent.postMessage(JSON.stringify(tagData), '*');
  }

}
