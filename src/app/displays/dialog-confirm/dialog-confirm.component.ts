import {Component} from '@angular/core';
import {DemoDynamicDialogConfirm} from "../../services/demo-dynamic-components-service";
import {DynamicDialogConfirm} from "../../models/dialog-confirm/dynamic-dialog-confirm";

@Component({
  selector: 'display-dialog-confirm',
  standalone: false,
  templateUrl: './dialog-confirm.component.html',
  styleUrl: './dialog-confirm.component.css'
})
export class DialogConfirmComponent {
  protected demoDynamicDialogConfirm: DemoDynamicDialogConfirm
  public visible: boolean;
  public draggable: boolean;
  public resizable: boolean;
  public dynamicDialogConfirm: DynamicDialogConfirm

  constructor() {
    this.demoDynamicDialogConfirm = new DemoDynamicDialogConfirm();
    this.visible = this.demoDynamicDialogConfirm.visible;
    this.draggable = this.demoDynamicDialogConfirm.draggable;
    this.resizable = this.demoDynamicDialogConfirm.resizable;
    this.dynamicDialogConfirm = this.demoDynamicDialogConfirm.dynamicDialogConfirm;
  }

  public setOkEventDialogConfirm() {
    console.log('get ok')
    this.visible = false
  }

  public setCloseEventDialogConfirm() {
    console.log('get close')
    this.visible = false
  }

}
