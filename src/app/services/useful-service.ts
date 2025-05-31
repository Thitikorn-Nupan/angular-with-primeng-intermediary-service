import {AbstractControl} from "@angular/forms";
import {Student} from "../models/entities/student";
import {File} from "../models/entities/file";
import {Product} from "../models/entities/product";
import {HeaderColumn} from "../models/tree-table/header-column";
import {DataTreeTable} from "../models/tree-table/data-tree-table";
import {TreeNode} from "primeng/api";

export class UsefulService {

  static getControlsName(controlsName : { [key:string] : AbstractControl<any,any> }) :string [] {
    return Object.keys(controlsName)
  }

  static getObjectKeys(object:Student|File|Product) :string [] {
    return Object.keys(object)
  }

  static convertObjectToJson(object : any) : string {
    return JSON.stringify(object)
  }

  static convertObjectToHeaderColumns(object: any): HeaderColumn[] {
    let headerColumns = []
    const objectKeys = UsefulService.getObjectKeys(object)
    for (let key of objectKeys) {
      headerColumns.push({field: key, header: key.toUpperCase()})
    }
    headerColumns.push({field: 'action', header: 'action'.toUpperCase()})
    return headerColumns
  }

  static convertModelToDataTreeTable(model: { data: any, subData: any[] | null } []): DataTreeTable<any>[] {
    let data: DataTreeTable<any>[] = []
    let subData: TreeNode<any>[] = []
    for (let i = 0; i < model.length!; i++) {
      if (model[i].subData?.length! > 0 && model[i].subData !== null) {
        for (let data of model[i].subData!) {
          subData.push({data: data})
        }
      }
      data.push({data: model[i].data, children: subData})
      subData = []
    }
    return data
  }

  static generateUuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

}
