import {FormControl} from "@angular/forms";
import {KeyFilterPattern} from "primeng/keyfilter";

export interface DynamicDialogForm {
   id : string
   label : string ;
   formControlName? : string
   formControl? : FormControl
   placeholder? : string | null // can be undefined
   pKeyFilter?: KeyFilterPattern | null | undefined // can be undefined
   type?: string | null | undefined // can be undefined
}
