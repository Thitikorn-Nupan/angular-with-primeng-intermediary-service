import {AbstractControl} from "@angular/forms";
import {Student} from "../models/entities/student";
import {File} from "../models/entities/file";
import {Product} from "../models/entities/product";

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

}
