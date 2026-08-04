import {Component, signal} from '@angular/core';
import {DemoDynamicIconForm} from "../../service/demo-dynamic-components-service";
import {FormGroup} from "@angular/forms";
import {DynamicIconForm} from "../../entities/dynamic-icon-form";
import {UsefulService} from "../../service/useful-service";

@Component({
  selector: 'display-icon-form',
  standalone: false,
  templateUrl: './icon-form.component.html',
  styleUrl: './icon-form.component.css'
})
export class IconFormComponent {

  private demoDynamicIconForm: DemoDynamicIconForm
  public formGroup: FormGroup;
  public formTitle: string;
  public dynamicIconForms: DynamicIconForm[];
  // for testing
  public resultFormGroup = signal<any[]>([]);
  public displayResultFormGroup = false;

  constructor() {
    this.demoDynamicIconForm = new DemoDynamicIconForm()
    this.formTitle = this.demoDynamicIconForm.formTitle
    this.dynamicIconForms = this.demoDynamicIconForm.dynamicIconForms
    this.formGroup = this.demoDynamicIconForm.formGroup
  }

  // very importance for working this.formGroup on this child component
  public setInitialFormGroup($event: FormGroup) : void {
    this.formGroup = $event;
  }

  public setSubmitEventFormGroup() : void {
    // console.log(this.formGroup);
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

  public setClearEventFormGroup() : void {
    this.displayResultFormGroup = false;
    this.formGroup.reset()
  }
}
