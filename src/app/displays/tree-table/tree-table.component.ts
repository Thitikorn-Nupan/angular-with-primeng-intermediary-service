import {Component} from '@angular/core';
import {DemoDynamicTreeTable} from "../../service/demo-dynamic-components-service";
import {DataTreeTable} from "../../entities/data-tree-table";
import {HeaderColumn} from "../../entities/header-column";
import {UsefulService} from "../../service/useful-service";

@Component({
  selector: 'display-tree-table',
  standalone: false,
  templateUrl: './tree-table.component.html',
  styleUrl: './tree-table.component.css'
})
export class TreeTableComponent {

  // if you do this way maybe you didn't bind data
  /*@ViewChild(DynamicTreeTableComponent,{static : false})
  private declare dynamicTreeTableComponent : DynamicTreeTableComponent // for reload data*/

  public demoDynamicTreeTable: DemoDynamicTreeTable
  public headerColumns : HeaderColumn[]
  public data : DataTreeTable<any>[]
  public id : string
  public tableTitle : string
  public scrollable : boolean
  public paginator : boolean
  public rowsScope : number

  public headerColumnsForShowing : HeaderColumn[]


  constructor() {
    this.demoDynamicTreeTable = new DemoDynamicTreeTable()
    this.tableTitle = this.demoDynamicTreeTable.tableTitle
    this.id = this.demoDynamicTreeTable.id
    this.scrollable = this.demoDynamicTreeTable.scrollable
    this.paginator = this.demoDynamicTreeTable.paginator
    this.rowsScope = this.demoDynamicTreeTable.rowsScope
    this.data = this.demoDynamicTreeTable.data
    this.headerColumns = this.demoDynamicTreeTable.headerColumns

    this.headerColumnsForShowing = this.demoDynamicTreeTable.convertObjectToHeaderColumns(this.data[0].data,['action'])
  }

  // very importance for working this.data on this child component
  protected setInitialData($event: DataTreeTable<any>[]) {
    this.data = $event // bind data
  }

  public setEditEventTreeTable($even : any) {
    this.data.forEach((item) => {
      let user = item.data
      if (user.id === $even.id) {
        user.email = 'test edited'
        user.password = 'test edited'
        user.firstName = 'test edited'
        user.lastName = 'test edited'
      }
    })
  }

  public setRemoveEventTreeTable($even : any) {
    console.log('get remove')
    this.data = this.data.filter((item) => item.data.id !== $even.id)
  }

  protected setOptionalEventTreeTable($event: any) {
    console.log('get optional')

  }


}
