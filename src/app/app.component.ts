import {Component, OnInit} from '@angular/core';


/*class DisplayDynamicIconFormGroup {

  private demoDynamicIconForm: DemoDynamicIconForm
  public  formGroup : FormGroup;
  public  formTitle: string;
  public  dynamicIconForms: DynamicIconForm[];
  // for testing
  public resultFormGroup = signal<any[]>([]);
  public displayResultFormGroup = false;

  constructor() {
    this.demoDynamicIconForm = new DemoDynamicIconForm()
    this.formTitle = this.demoDynamicIconForm.formTitle
    this.dynamicIconForms = this.demoDynamicIconForm.dynamicIconForms
    this.formGroup = this.demoDynamicIconForm.formGroup
  }

  public setInitialFormGroup($event: FormGroup) {
    this.formGroup = $event;
  }

  public setSubmitEventFormGroup() {
    console.log('get submit')
    if (this.formGroup.valid) {
      const controlKeys : string[] = UsefulService.getControlsName(this.formGroup.controls)
      let resultsSet: { severity : string , content : string }[] = []
      for (const controlKey of controlKeys) {
        // ternary operator multiple conditions
        resultsSet.push({severity : 'secondary',content : `${controlKey} : ${
          controlKey === 'map' ? UsefulService.convertObjectToJson(this.formGroup.get(controlKey)?.value) :
          controlKey ==='skills' ? UsefulService.convertObjectToJson(this.formGroup.get(controlKey)?.value) :
          controlKey ==='categories' ? UsefulService.convertObjectToJson(this.formGroup.get(controlKey)?.value) :
          this.formGroup.get(controlKey)?.value
        }`})
      }
      this.displayResultFormGroup = true;
      this.resultFormGroup.set(resultsSet)
    } else {
      this.displayResultFormGroup = false;
    }
  }

  public setClearEventFormGroup() {
    console.log('get clear')
    this.displayResultFormGroup = false;
    this.formGroup.reset()
  }

}*/

/*class DisplayDynamicIconKeyFilterFormGroup {
  private demoDynamicIconFormKeyFilter: DemoDynamicIconFormKeyFilter
  public  formGroup : FormGroup;
  public  formTitle: string;
  public  dynamicIconFormsKeyFilter: DynamicIconFormKeyFilter[];
  // for testing
  public resultFormGroup = signal<any[]>([]);
  public displayResultFormGroup = false;

  constructor() {
    this.demoDynamicIconFormKeyFilter = new DemoDynamicIconFormKeyFilter()
    this.formTitle = this.demoDynamicIconFormKeyFilter.formTitle
    this.dynamicIconFormsKeyFilter = this.demoDynamicIconFormKeyFilter.dynamicIconFormsKeyFilter
    this.formGroup = this.demoDynamicIconFormKeyFilter.formGroup
  }

  public setInitialFormGroup($event: FormGroup) {
    this.formGroup = $event;
  }

  public setSubmitEventFormGroup() {
    console.log('get submit')
    if (this.formGroup.valid) {
      const controlKeys : string[] = UsefulService.getControlsName(this.formGroup.controls)
      let resultsSet: { severity : string , content : string }[] = []
      for (const controlKey of controlKeys) {
        // ternary operator multiple conditions
        resultsSet.push({severity : 'primary',content : `${controlKey} : ${
            controlKey === 'map' ? UsefulService.convertObjectToJson(this.formGroup.get(controlKey)?.value) :
            controlKey ==='skills' ? UsefulService.convertObjectToJson(this.formGroup.get(controlKey)?.value) :
            controlKey ==='categories' ? UsefulService.convertObjectToJson(this.formGroup.get(controlKey)?.value) :
            this.formGroup.get(controlKey)?.value
          }`})
      }
      this.displayResultFormGroup = true;
      this.resultFormGroup.set(resultsSet)
    } else {
      this.displayResultFormGroup = false;
    }
  }

  public setClearEventFormGroup() {
    console.log('get clear')
    this.displayResultFormGroup = false;
    this.formGroup.reset()
  }
}*/

/*class DisplayDynamicTreeTable {
  @ViewChild(DynamicTreeTableComponent,{static : false})
  public dynamicTreeTableComponent!: DynamicTreeTableComponent
  public demoDynamicTreeTable: DemoDynamicTreeTable
  public id : string
  public scrollable : boolean
  public paginator : boolean
  public rowsScope : number
  public model : any

  constructor() {
    this.demoDynamicTreeTable = new DemoDynamicTreeTable()
    this.id = 'dynamic-tree-table'
    this.scrollable = true
    this.paginator = true
    this.rowsScope = 5
    this.model = this.demoDynamicTreeTable.students
  }

  public setEditEventTreeTable() {
    console.log('get edit')
    this.model = this.demoDynamicTreeTable.products
    // console.log(this.model)
  }

  public setRemoveEventTreeTable() {
    console.log('get remove')
  }

}*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit {

  // protected readonly DISPLAY_DYNAMIC_ICON_FORM_GROUP : DisplayDynamicIconFormGroup = new DisplayDynamicIconFormGroup();
  // protected readonly DISPLAY_DYNAMIC_ICON_KEY_FILTER_FORM_GROUP : DisplayDynamicIconKeyFilterFormGroup = new DisplayDynamicIconKeyFilterFormGroup();
  // protected readonly DISPLAY_DYNAMIC_TREE_TABLE : DisplayDynamicTreeTable = new DisplayDynamicTreeTable();

  constructor() {

  }

  ngOnInit(): void {
    // this.dynamicTreeTableComponent.prepareData(this.DISPLAY_DYNAMIC_TREE_TABLE.model)
  }


}




