import {Component, ViewChild} from '@angular/core';
import {DynamicTreeTableComponent} from "../../components/dynamic-tree-table/dynamic-tree-table.component";
import {DemoDynamicTreeTable} from "../../services/demo-dynamic-components-service";
import {DataTreeTable} from "../../models/tree-table/data-tree-table";
import {HeaderColumn} from "../../models/tree-table/header-column";

@Component({
  selector: 'tree-table',
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
  // public model : any[]

  constructor() {
    this.demoDynamicTreeTable = new DemoDynamicTreeTable()
    this.tableTitle = this.demoDynamicTreeTable.tableTitle
    this.id = this.demoDynamicTreeTable.id
    this.scrollable = this.demoDynamicTreeTable.scrollable
    this.paginator = this.demoDynamicTreeTable.paginator
    this.rowsScope = this.demoDynamicTreeTable.rowsScope
    // this.model = this.demoDynamicTreeTable.users
    this.data = this.demoDynamicTreeTable.data
    this.headerColumns = this.demoDynamicTreeTable.headerColumns
  }

  // very importance for working this.data on this child component
  protected setInitialData($event: DataTreeTable<any>[]) {
    this.data = $event // bind data
  }

  public setEditEventTreeTable($even : any) {
    console.log('get edit')
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


}
