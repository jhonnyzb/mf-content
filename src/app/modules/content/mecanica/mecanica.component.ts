import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ProgramUtil } from "src/app/core/utils/ProgramUtil";
import { UtilsTitle } from "src/app/core/utils/UtilsTitle";
import { ParametersConceptsDto } from "src/app/infraestructure/dto/request/parametersConcepts.dto";
import { ProgramDto } from "src/app/infraestructure/dto/response/programsResponse.dto";
import { ProgramService } from "src/app/infraestructure/services/program-service";

@Component({
  selector: "app-mecanica",
  templateUrl: "./mecanica.component.html",
  styleUrls: ["./mecanica.component.scss"],
})
export class MecanicaComponent implements OnInit {
  mostrarPreguntas: boolean = false;
  mostrarMecanica: boolean = true;
  program!: ProgramDto;
  parameters!: ParametersConceptsDto;
  showEmbed: boolean = false;

  constructor(
    private programService: ProgramService,
    private programUtil: ProgramUtil,
    private utilsTitle: UtilsTitle
  ) {
    this.utilsTitle.suscribeRoutesTitle();
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.program = this.programUtil.getProgram();
    this.getLinkData();
  }

  getLinkData() {
    this.programService.getParamsConcept(this.program.IDEmpresaPromotoraPpal,29,0).subscribe({
      next: (data: ParametersConceptsDto[]) => {
        this.parameters = data.filter(
          (x) => x.Parametro == "MECANICA_WEBAPP_CLUSTER"
        )[0];
        this.showEmbed = true;
      },
      error: (error: HttpErrorResponse) => {
      console.error("Error conceptos", error);

      }
     });
  }

  ocultarMecanica() {
    this.mostrarPreguntas = true;
    this.mostrarMecanica = false;
  }

  ocultarPreguntas() {
    this.mostrarPreguntas = false;
    this.mostrarMecanica = true;
  }
}
