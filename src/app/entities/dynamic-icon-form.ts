import {FormControl} from "@angular/forms";
import {KeyFilterPattern} from "primeng/keyfilter";

// for primeng 17
export interface OptionDropdown {
  key: string,
  label: string,
  data: string,
  icon?: string,
  children?: OptionDropdown[]
}

interface RadioButton {
  status: boolean
  options: { name: string; key: string } []
}

interface Checkbox {
  status: boolean
  options: { name: string; key: string } []
}

export interface DynamicIconForm {
  icon?: string | null
  formControlName?: string
  formControl?: FormControl
  id?: string
  placeholder?: string | null // can be undefined
  pKeyFilter?: KeyFilterPattern | null | undefined // can be undefined
  isInputText?: boolean | null
  isIconExist?: boolean | null
  isTextarea?: boolean | null
  isDropdown?: OptionDropdown[] | null // for primeng 17
  isCheckbox?: Checkbox | null
  isRadio?: RadioButton | null
  isReadOnly?: boolean
  isDate?: boolean
}


