import {Component} from '@angular/core';
import {DemoDynamicTreeTable} from "../../service/demo-dynamic-components-service";
import {DataTreeTable} from "../../entities/data-tree-table";
import {HeaderColumn} from "../../entities/header-column";

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
  public headerColumns: HeaderColumn[]
  public data: DataTreeTable<any>[]
  public id: string
  public tableTitle: string
  public scrollable: boolean
  public paginator: boolean
  public rowsScope: number
  public headerColumnsForShowing: HeaderColumn[]


  constructor() {
    this.demoDynamicTreeTable = new DemoDynamicTreeTable()
    this.tableTitle = this.demoDynamicTreeTable.tableTitle
    this.id = this.demoDynamicTreeTable.id
    this.scrollable = this.demoDynamicTreeTable.scrollable
    this.paginator = this.demoDynamicTreeTable.paginator
    this.rowsScope = this.demoDynamicTreeTable.rowsScope
    this.data = this.demoDynamicTreeTable.data
    this.headerColumns = this.demoDynamicTreeTable.headerColumns
    this.headerColumnsForShowing = this.demoDynamicTreeTable.convertObjectToHeaderColumns(this.data[0].data, ['action'])
  }

  // very importance for working this.data on this child component
  protected setInitialData($event: DataTreeTable<any>[]): void {
    this.data = $event // bind data
  }

  public setEditEventTreeTable($even: any): void {
    const id = $even.id
    this.data.forEach((item) => {
      let user = item.data
      if (user.id === id) {
        user.email = 'test parent edited'
        user.password = 'test parent edited'
        user.firstName = 'test parent edited'
        user.lastName = 'test parent edited'
      } else if (item.children && item.children.length > 0) {
        item.children.forEach(child => {
          let user = child.data
          if (user.id === id) {
            user.email = 'test child edited'
            user.password = 'test child edited'
            user.firstName = 'test child edited'
            user.lastName = 'test child edited'
          }
        })
      }
    })
  }

  public setRemoveEventTreeTable($even: any): void {
    console.log('get remove')
    const id = $even.id
    // delete children if exists
    this.data = this.data.filter((item) => {
      if (item.children && item.children.length > 0) {
        item.children.filter(child => {
          if (child.data.id === id) {
            item.children = item.children.filter(child => child.data.id !== id)
          }
        })
      }
      return item
    })
    // delete parent
    this.data = this.data.filter((item) => item.data.id !== id)
  }

  protected setOptionalEventTreeTable($event: any): void {
    console.log('get optional')
  }

}
