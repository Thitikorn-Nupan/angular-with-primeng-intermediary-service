import {Component, signal} from '@angular/core';
import {DemoDynamicIconFormKeyFilter} from "../../services/demo-dynamic-components-service";
import {FormGroup} from "@angular/forms";
import {DynamicIconFormKeyFilter} from "../../models/icon-form-keyfilter/dynamic-icon-form-keyfilter";
import {UsefulService} from "../../services/useful-service";

@Component({
  selector: 'display-icon-form-key-filter',
  standalone: false,
  templateUrl: './icon-form-key-filter.component.html',
  styleUrl: './icon-form-key-filter.component.css'
})
export class IconFormKeyFilterComponent {

  private demoDynamicIconFormKeyFilter: DemoDynamicIconFormKeyFilter
  public formGroup: FormGroup;
  public formTitle: string;
  public dynamicIconFormsKeyFilter: DynamicIconFormKeyFilter[];
  // for testing
  public resultFormGroup = signal<any[]>([]);
  public displayResultFormGroup = false;

  constructor() {
    this.demoDynamicIconFormKeyFilter = new DemoDynamicIconFormKeyFilter()
    this.formTitle = this.demoDynamicIconFormKeyFilter.formTitle
    this.dynamicIconFormsKeyFilter = this.demoDynamicIconFormKeyFilter.dynamicIconFormsKeyFilter
    this.formGroup = this.demoDynamicIconFormKeyFilter.formGroup
  }

  // very importance for working this.formGroup on this child component
  public setInitialFormGroup($event: FormGroup) {
    this.formGroup = $event;
  }

  public setSubmitEventFormGroup() {
    console.log('get submit')
    if (this.formGroup.valid) {
      const controlKeys: string[] = UsefulService.getControlsName(this.formGroup.controls)
      let resultsSet: { severity: string, content: string }[] = []
      for (const controlKey of controlKeys) {
        // ternary operator multiple conditions
        resultsSet.push({
          severity: 'secondary', content: `${controlKey} : ${
            controlKey === 'map' ? UsefulService.convertObjectToJson(this.formGroup.get(controlKey)?.value) :
              controlKey === 'skills' ? UsefulService.convertObjectToJson(this.formGroup.get(controlKey)?.value) :
                controlKey === 'categories' ? UsefulService.convertObjectToJson(this.formGroup.get(controlKey)?.value) :
                  this.formGroup.get(controlKey)?.value
          }`
        })
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
}
