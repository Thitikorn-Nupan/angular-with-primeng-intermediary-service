import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {DynamicDialogForm} from "../../entities/dynamic-dialog-form";

@Component({
  selector: 'dynamic-dialog-form',
  standalone: false,
  templateUrl: './dynamic-dialog-form.component.html',
  styleUrl: './dynamic-dialog-form.component.css'
})
export class DynamicDialogFormComponent implements OnInit {
  @Input()
  public formGroup!: FormGroup;
  @Input()
  public formTitle!: string;
  @Input()
  public visible!: boolean;
  @Input()
  public draggable!: boolean;
  @Input()
  public resizable!: boolean;
  @Input()
  public dynamicDialogForms!: DynamicDialogForm[]
  @Output()
  public submitEvent: EventEmitter<any> = new EventEmitter();
  @Output()
  public clearEvent: EventEmitter<any> = new EventEmitter();
  @Output()
  public getFormGroup: EventEmitter<FormGroup> = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {
    for (let i = 0; i < this.dynamicDialogForms.length; i++) {
      this.formGroup.addControl(this.dynamicDialogForms[i].formControlName!, this.dynamicDialogForms[i].formControl)
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
