import {Component} from '@angular/core';
import { FormGroup} from "@angular/forms";
import {DynamicDialogForm} from "../../entities/dynamic-dialog-form";
import {DemoDynamicDialogForm} from "../../service/demo-dynamic-components-service";

@Component({
  selector: 'display-dialog-form',
  standalone: false,
  templateUrl: './dialog-form.component.html',
  styleUrl: './dialog-form.component.css'
})
export class DialogFormComponent {

  private demoDynamicDialogKeyFilter: DemoDynamicDialogForm
  public formGroup! : FormGroup;
  public formTitle! : string;
  public visible!: boolean ;
  public draggable!: boolean ;
  public resizable!: boolean ;
  public dynamicDialogForms! :DynamicDialogForm[]

  constructor() {
    this.demoDynamicDialogKeyFilter = new DemoDynamicDialogForm();
    this.formGroup = this.demoDynamicDialogKeyFilter.formGroup;
    this.formTitle = this.demoDynamicDialogKeyFilter.formTitle
    this.visible = this.demoDynamicDialogKeyFilter.visible
    this.draggable = this.demoDynamicDialogKeyFilter.draggable;
    this.resizable = this.demoDynamicDialogKeyFilter.resizable;
    this.dynamicDialogForms =this.demoDynamicDialogKeyFilter.dynamicDialogForms;
  }

  // very importance for working this.formGroup on this child component
  public setInitialFormGroup($event: FormGroup) : void {
    this.formGroup = $event;
  }

  public setSubmitEventFormGroup() : void {
    console.log('get submit')
    console.log(this.formGroup.value)
  }

  public setClearEventFormGroup() : void {
    console.log('get clear')
    this.formGroup.reset()
  }
}
