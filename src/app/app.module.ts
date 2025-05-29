import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { ButtonModule } from 'primeng/button';
import {InputIcon} from "primeng/inputicon";
import {IconField} from "primeng/iconfield";
import {InputText} from "primeng/inputtext";
import { DynamicIconFormComponent } from './components/dynamic-icon-form/dynamic-icon-form.component';
import {InputGroup} from "primeng/inputgroup";
import {InputGroupAddon} from "primeng/inputgroupaddon";
import {InputNumber} from "primeng/inputnumber";
import {ReactiveFormsModule} from "@angular/forms";
import {Card} from "primeng/card";
import {Select} from "primeng/select";
import {Textarea} from "primeng/textarea";
import {Checkbox} from "primeng/checkbox";
import {RadioButton} from "primeng/radiobutton";
import {Message} from "primeng/message";
import { DynamicIconFormKeyFilterComponent } from './components/dynamic-icon-form-keyfilter/dynamic-icon-form-key-filter.component';
import {KeyFilter} from "primeng/keyfilter";
import { DynamicTreeTableComponent } from './components/dynamic-tree-table/dynamic-tree-table.component';
import {TreeTableModule} from "primeng/treetable";
import { TreeTableComponent } from './displays/tree-table/tree-table.component';
import { IconFormComponent } from './displays/icon-form/icon-form.component';
import { IconFormKeyFilterComponent } from './displays/icon-form-keyfilter/icon-form-key-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicIconFormComponent,
    DynamicIconFormKeyFilterComponent,
    DynamicTreeTableComponent,
    TreeTableComponent,
    IconFormComponent,
    IconFormKeyFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputIcon,
    IconField,
    InputText,
    InputGroup,
    InputGroupAddon,
    InputNumber,
    ReactiveFormsModule,
    Card,
    Select,
    Textarea,
    Checkbox,
    RadioButton,
    Message,
    KeyFilter,
    TreeTableModule
  ],
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        // way to close dark mode
        // PrimeNG uses the system as the default darkModeSelector
        // If you have a dark mode switch in your application, set the darkModeSelector to the selector you utilize such as .my-app-dark
        preset: Aura,
        options: {
          darkModeSelector: '.my-app-dark'
        }
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*const customPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{purple.50}',
      100: '{purple.100}',
      200: '{purple.200}',
      300: '{purple.300}',
      400: '{purple.400}',
      500: '{purple.500}',
      600: '{purple.600}',
      700: '{purple.700}',
      800: '{purple.800}',
      900: '{purple.900}',
      950: '{purple.950}',
    },
    colorScheme: {
      light: {
        primary: {
          color: '{purple.800}',
          inverseColor: '#ffffff',
          hoverColor: '{purple.900}',
          activeColor: '{purple.800}',
        },
        highlight: {
          background: '{purple.950}',
          focusBackground: '{purple.700}',
          color: '#ffffff',
          focusColor: '#ffffff',
        },
      },
      dark: {
        primary: {
          color: '{purple.50}',
          inverseColor: '{purple.950}',
          hoverColor: '{purple.100}',
          activeColor: '{purple.200}',
        },
        highlight: {
          background: 'rgba(250, 250, 250, .16)',
          focusBackground: 'rgba(250, 250, 250, .24)',
          color: 'rgba(255,255,255,.87)',
          focusColor: 'rgba(255,255,255,.87)',
        },
      },
    },
  },
});*/
