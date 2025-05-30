import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {DynamicIconForm} from "../../models/icon-form/dynamic-icon-form";

@Component({
  selector: 'dynamic-icon-form',
  standalone: false,
  templateUrl: './dynamic-icon-form.component.html',
  styleUrl: './dynamic-icon-form.component.css'
})
export class DynamicIconFormComponent implements OnInit {

  @Input()
  public formGroup! : FormGroup;
  @Input()
  public formTitle! : string;
  @Input()
  public dynamicIconForms! : DynamicIconForm[];

  @Output()
  public submitEvent: EventEmitter<any> = new EventEmitter();
  @Output()
  public clearEvent: EventEmitter<any> = new EventEmitter();
  @Output()
  public getFormGroup: EventEmitter<FormGroup> = new EventEmitter();

  constructor() {
  }


  ngOnInit(): void {
    this.getFormGroup.emit(this.formGroup);
    // console.log('ngOnInit and emit formGroup', this.formGroup);
  }

  // send only events back
  protected getSubmitEventFormGroup() {
    this.submitEvent?.emit();
  }

  protected getClearEventFormGroup() {
    this.clearEvent?.emit();
  }
}


