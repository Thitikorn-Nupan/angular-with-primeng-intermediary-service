import {Component} from '@angular/core';
import { FormGroup} from "@angular/forms";
import {DynamicDialogKeyFilter} from "../../models/dialog-keyfilter/dynamic-dialog-keyfilter";
import {DemoDynamicDialogKeyFilter} from "../../services/demo-dynamic-components-service";

@Component({
  selector: '[display-dialog-key-filter]',
  standalone: false,
  templateUrl: './dialog-key-filter.component.html',
  styleUrl: './dialog-key-filter.component.css'
})
export class DialogKeyFilterComponent {

  private demoDynamicDialogKeyFilter: DemoDynamicDialogKeyFilter

  public formGroup! : FormGroup;
  public formTitle! : string;
  public visible!: boolean ;
  public draggable!: boolean ;
  public resizable!: boolean ;
  public dynamicDialogKeyFilters! :DynamicDialogKeyFilter[]

  constructor() {
    this.demoDynamicDialogKeyFilter = new DemoDynamicDialogKeyFilter();
    this.formGroup = this.demoDynamicDialogKeyFilter.formGroup;
    this.formTitle = this.demoDynamicDialogKeyFilter.formTitle
    this.visible = this.demoDynamicDialogKeyFilter.visible
    this.draggable = this.demoDynamicDialogKeyFilter.draggable;
    this.resizable = this.demoDynamicDialogKeyFilter.resizable;
    this.dynamicDialogKeyFilters =this.demoDynamicDialogKeyFilter.dynamicDialogKeyFilters;

  }

  // very importance for working this.formGroup on this child component
  public setInitialFormGroup($event: FormGroup) {
    this.formGroup = $event;
  }

  public setSubmitEventFormGroup() {
    console.log('get submit')
  }

  public setClearEventFormGroup() {
    console.log('get clear')
    this.formGroup.reset()
  }
}
