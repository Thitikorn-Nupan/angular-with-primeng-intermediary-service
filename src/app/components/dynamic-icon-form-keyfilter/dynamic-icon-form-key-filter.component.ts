import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {DynamicIconFormKeyFilter} from "../../models/icon-form-keyfilter/dynamic-icon-form-keyfilter";

@Component({
  selector: 'dynamic-icon-form-key-filter',
  standalone: false,
  templateUrl: './dynamic-icon-form-key-filter.component.html',
  styleUrl: './dynamic-icon-form-key-filter.component.css'
})
export class DynamicIconFormKeyFilterComponent implements OnInit {

  @Input()
  public formGroup! : FormGroup;
  @Input()
  public formTitle! : string;
  @Input()
  public dynamicIconFormsKeyFilter! : DynamicIconFormKeyFilter[];
  @Output()
  public submitEvent: EventEmitter<any> = new EventEmitter();
  @Output()
  public clearEvent: EventEmitter<any> = new EventEmitter();
  @Output()
  public getFormGroup: EventEmitter<FormGroup> = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {
    for (let i = 0; i < this.dynamicIconFormsKeyFilter.length; i++) {
      this.formGroup.addControl(this.dynamicIconFormsKeyFilter[i].formControlName!, this.dynamicIconFormsKeyFilter[i].formControl)
    }
    this.getFormGroup.emit(this.formGroup);
    console.log('ngOnInit and emit formGroup', this.formGroup);
  }

  protected getSubmitEventFormGroup() {
    this.submitEvent?.emit();
  }

  protected getClearEventFormGroup() {
    this.clearEvent?.emit();
  }

}
