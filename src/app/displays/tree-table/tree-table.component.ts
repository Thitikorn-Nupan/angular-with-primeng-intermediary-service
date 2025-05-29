import {Component, ViewChild} from '@angular/core';
import {DynamicTreeTableComponent} from "../../components/dynamic-tree-table/dynamic-tree-table.component";
import {DemoDynamicTreeTable} from "../../services/demo-dynamic-components-service";

@Component({
  selector: 'tree-table',
  standalone: false,
  templateUrl: './tree-table.component.html',
  styleUrl: './tree-table.component.css'
})
export class TreeTableComponent {
  @ViewChild(DynamicTreeTableComponent,{static : false})
  private declare dynamicTreeTableComponent : DynamicTreeTableComponent // for reload data
  public demoDynamicTreeTable: DemoDynamicTreeTable
  public id : string
  public tableTitle : string
  public scrollable : boolean
  public paginator : boolean
  public rowsScope : number
  public model : any[]

  constructor() {
    this.demoDynamicTreeTable = new DemoDynamicTreeTable()
    this.tableTitle = this.demoDynamicTreeTable.tableTitle
    this.id = this.demoDynamicTreeTable.id
    this.scrollable = this.demoDynamicTreeTable.scrollable
    this.paginator = this.demoDynamicTreeTable.paginator
    this.rowsScope = this.demoDynamicTreeTable.rowsScope
    this.model = this.demoDynamicTreeTable.users
  }

  public setEditEventTreeTable($even : any) {
    console.log('get edit')
    this.model.forEach(( object :  {data : any , subData : any[]} ) => {
      let data = object.data
      if (data.id == $even.id) {
        data.email = 'test edited'
        data.password = 'test edited'
        data.firstName = 'test edited'
        data.lastName = 'test edited'
      }
    })
    // reload data
    this.dynamicTreeTableComponent.prepareData(this.model)
  }

  public setRemoveEventTreeTable($even : any) {
    console.log('get remove')
    this.model = this.model.filter(( object :  {data : any , subData : any[]} , index:number ) => object.data.id !== $even.id )
    // reload data
    this.dynamicTreeTableComponent.prepareData(this.model)
  }
}
