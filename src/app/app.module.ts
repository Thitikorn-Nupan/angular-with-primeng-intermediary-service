import {importProvidersFrom, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DynamicTreeTableComponent} from "./components/dynamic-tree-table/dynamic-tree-table.component";
import {TreeTableModule} from "primeng/treetable";
import {CardModule} from "primeng/card";
import {InputGroupModule} from "primeng/inputgroup";
import {Button, ButtonDirective} from "primeng/button";
import {Ripple} from "primeng/ripple";
import {DynamicIconFormComponent} from "./components/dynamic-icon-form/dynamic-icon-form.component";
import {InputGroupAddonModule} from "primeng/inputgroupaddon";
import {InputTextModule} from "primeng/inputtext";
import {ReactiveFormsModule} from "@angular/forms";
import {KeyFilterModule} from "primeng/keyfilter";
import {InputTextareaModule} from "primeng/inputtextarea";
import {TreeSelectModule} from "primeng/treeselect";
import {CheckboxModule} from "primeng/checkbox";
import {RadioButtonModule} from "primeng/radiobutton";
import {InputMaskModule} from "primeng/inputmask";
import {IconFormComponent} from "./displays/icon-form/icon-form.component";
import {MessageModule} from "primeng/message";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TreeTableComponent} from "./displays/tree-table/tree-table.component";
import {DynamicDialogFormComponent} from "./components/dynamic-dialog-form/dynamic-dialog-form.component";
import {DialogModule} from "primeng/dialog";
import {DialogFormComponent} from "./displays/dialog-form/dialog-form.component";
import {FloatLabelModule} from "primeng/floatlabel";

@NgModule({
  declarations: [
    AppComponent,
    DynamicTreeTableComponent,
    DynamicIconFormComponent,
    DynamicDialogFormComponent,
    DialogFormComponent,
    IconFormComponent,
    TreeTableComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        TreeTableModule,
        CardModule,
        InputGroupModule,
        ButtonDirective,
        Ripple,
        InputGroupAddonModule,
        InputTextModule,
        ReactiveFormsModule,
        KeyFilterModule,
        InputTextareaModule,
        TreeSelectModule,
        CheckboxModule,
        RadioButtonModule,
        InputMaskModule,
        MessageModule,
        DialogModule,
        Button,
        FloatLabelModule
    ],
  providers: [
    // for DialogModule & PSelect
    importProvidersFrom([BrowserAnimationsModule])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
