import {FormControl} from "@angular/forms";

interface Dropdown {
  status: boolean
  options : { name: string; code: string }[]
}

interface RadioButton {
  status: boolean
  options : { name: string; key: string } []
}

interface Checkbox {
  status: boolean
  options : { name: string; key: string } []
}

export class DynamicIconForm {

  public icon? : string | null
  public formControlName? : string
  public formControl? : FormControl
  public id? : string
  public type! : string // can be undefined
  public placeholder? : string | null// can be undefined
  public isIconExist? : boolean | null
  public isNumber? : boolean | null
  public isDecimal? : boolean | null
  public isCurrency? : boolean | null
  public isTextarea? : boolean | null
  public isDropdown? : Dropdown | null
  public isCheckbox? : Checkbox | null
  public isRadio? : RadioButton | null

  constructor(icon: string | null,
              formControlName: string ,
              formControl : FormControl ,
              id: string,
              isIconExist: boolean | null) {
    this.icon = icon;
    this.formControlName = formControlName;
    this.formControl = formControl;
    this.id = id;
    this.isIconExist = isIconExist
    this.isNumber = null;
    this.isDecimal = null;
    this.isCurrency = null;
    this.isTextarea = null;
    this.isDropdown = null;
    this.isCheckbox = null
    this.isRadio = null
    this.placeholder = null;
    // this.type = 'text'
  }

  public setPlaceholder(value : string) {
    this.placeholder = value;
    return this;
  }

  public setCurrency(value: boolean) {
    this.isCurrency = value;
    return this;
  }

  public setNumber(value: boolean) {
    this.isNumber = value;
    return this;
  }

  public setDecimal(value: boolean) {
    this.isDecimal = value;
    return this;
  }

  public setType(value: string) {
    this.type = value;
    return this;
  }

  public setDropdown(value: Dropdown) {
    this.isDropdown = value;
    return this;
  }

  public setCheckbox(value: Checkbox) {
    this.isCheckbox = value;
    return this;
  }

  public setRadio(value: RadioButton) {
    this.isRadio = value;
    return this;
  }

  public setTextarea(value: boolean) {
    this.isTextarea = value;
    return this;
  }
}
