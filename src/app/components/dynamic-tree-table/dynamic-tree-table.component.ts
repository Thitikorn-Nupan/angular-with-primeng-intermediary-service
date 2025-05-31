import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HeaderColumn} from "../../models/tree-table/header-column";
import {DataTreeTable} from "../../models/tree-table/data-tree-table";

@Component({
  selector: 'dynamic-tree-table',
  standalone: false,
  templateUrl: './dynamic-tree-table.component.html',
  styleUrl: './dynamic-tree-table.component.css'
})
export class DynamicTreeTableComponent implements OnInit {
  @Input()
  public data!: DataTreeTable<any>[] // data for map api to p tree table
  @Input()
  public tableTitle!: string;
  // @Input()
  // public model!: { data: any, subData: any[] | null } []
  @Input()
  public headerColumns!: HeaderColumn[]
  @Input()
  public id!: string
  @Input()
  public scrollable!: boolean
  @Input()
  public paginator!: boolean
  @Input()
  public rowsScope!: number
  @Output()
  public editEvent: EventEmitter<any> = new EventEmitter();
  @Output()
  public removeEvent: EventEmitter<any> = new EventEmitter();
  @Output()
  public getData: EventEmitter<DataTreeTable<any>[]> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    this.getData.emit(this.data)
  }

  public reloadData(data:DataTreeTable<any>[]): void {
    this.data = data
    console.log(this.data)
  }
  /**
  public prepareData(model: { data: any, subData: any[] | null } []) {
    // this.convertModelToDataTreeTable(model)
  }

  private loadHeaderColumns(object: any): void {
    this.headerColumns = []
    const objectKeys = UsefulService.getObjectKeys(object)
    for (let key of objectKeys) {
      this.headerColumns.push({field: key, header: key.toUpperCase()})
    }
    this.headerColumns.push({field: 'action', header: 'action'.toUpperCase()})
  }

  private convertModelToDataTreeTable(model: { data: any, subData: any[] | null } []): void {
    this.data = []
    let subData: any[] = []
    for (let i = 0; i < model.length!; i++) {
      if (model[i].subData?.length! > 0 && model[i].subData !== null) {
        for (let data of model[i].subData!) {
          // console.log(data)
          subData.push({data: data})
        }
      }
      this.data.push({data: model[i].data, children: subData})
      subData = []
    }
  }
  */

  protected getEditEventTreeTable(data: any) {
    this.editEvent.emit(data)
  }

  protected getRemoveEventTreeTable(data: any) {
    this.removeEvent.emit(data)
  }
}
