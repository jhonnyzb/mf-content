import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { getSession } from "src/app/core/encryptData";
import { ParametersConceptsDto } from "../dto/request/parametersConcepts.dto";
import { ProgramDto } from "../dto/response/programsResponse.dto";
import { EnvironmentModel } from "src/app/core/models/response/environment.model";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private http: HttpClient) { }

  getProgram(programId: number, originEquipmentTypeID: number) {
    return this.http.get<ProgramDto>(`${environment.serverName}v1/programas?IDPrograma=${programId}&IDTipoEquipoOrigen=${originEquipmentTypeID}`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => new Error(error.message));
      })
    );
  }

  getParamsConcept(bussinessPersonId: number, conceptId: number, codeId: number) {
    return this.http.get<ParametersConceptsDto[]>(`${environment.serverName}v1/programas/parametrosconceptos?IdPersonaEmpresa=${bussinessPersonId}&IdConcepto=${conceptId}&IdCodigo=${codeId}`);
  }

}
