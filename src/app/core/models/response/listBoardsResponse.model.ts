import { SegmentModel } from "./segments.model";

export class ListBoardsResponseModel{
  constructor(public boardEntities: BoardEntityModel[]){}
}

export class BoardEntityModel {
  constructor(
  public boardId: number,
  public boardTypeId: number,
  public languageId: number,
  public programId: number,
  public name: string,
  public startDateValidity: string,
  public endDateValidity: string,
  public openingModeId: number,
  public url: string,
  public image: string,
  public displayOrder: number,
  public properties: string,
  public dateRegister: string,
  public dateUpdate: string,
  public personIdCreate: number,
  public personIdUpdate: number,
  public segments: SegmentModel[]){}
}
