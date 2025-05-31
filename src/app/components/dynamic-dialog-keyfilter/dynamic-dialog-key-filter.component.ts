import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DynamicDialogKeyFilter} from "../../models/dialog-keyfilter/dynamic-dialog-keyfilter";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'dynamic-dialog-key-filter',
  standalone: false,
  templateUrl: './dynamic-dialog-key-filter.component.html',
  styleUrl: './dynamic-dialog-key-filter.component.css'
})
export class DynamicDialogKeyFilterComponent implements OnInit {
  @Input()
  public formGroup! : FormGroup;
  @Input()
  public formTitle! : string;
  @Input()
  public visible!: boolean ;
  @Input()
  public draggable!: boolean ;
  @Input()
  public resizable!: boolean ;
  @Input()
  public dynamicDialogKeyFilters! :DynamicDialogKeyFilter[]
  @Output()
  public submitEvent: EventEmitter<any> = new EventEmitter();
  @Output()
  public clearEvent: EventEmitter<any> = new EventEmitter();
  @Output()
  public getFormGroup: EventEmitter<FormGroup> = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {
    for (let i = 0; i < this.dynamicDialogKeyFilters.length; i++) {
      this.formGroup.addControl(this.dynamicDialogKeyFilters[i].formControlName!, this.dynamicDialogKeyFilters[i].formControl)
    }
    this.getFormGroup.emit(this.formGroup);
  }

  protected getSubmitEventFormGroup() {
    this.submitEvent?.emit();
  }

  protected getClearEventFormGroup() {
    this.clearEvent?.emit();
  }
}
