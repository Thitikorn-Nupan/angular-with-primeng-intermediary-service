import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DynamicIconFormKeyFilter} from "../../models/icon-form-keyfilter/dynamic-icon-form-keyfilter";
import {DemoDynamicTreeTable} from "../../services/demo-dynamic-components-service";
import {HeaderColumn} from "../../models/tree-table/header-column";
import {DataTreeTable} from "../../models/tree-table/data-tree-table";
import {UsefulService} from "../../services/useful-service";
import {Student} from "../../models/entities/student";
import {DynamicTreeTableComponent} from "../../components/dynamic-tree-table/dynamic-tree-table.component";

@Component({
  selector: 'crud-students',
  standalone: false,
  templateUrl: './crud-students.component.html',
  styleUrl: './crud-students.component.css'
})
export class CrudStudentsComponent implements OnInit , AfterViewInit {


  private studentsFormApiFormat: {data : Student,subData : Student[] | null  } [] = [
    {
      data : new Student(UsefulService.generateUuid(),'alex slider','alex@hotmail.com',2),
      subData : null
    },
    {
      data : new Student(UsefulService.generateUuid(),'max ryder','max@hotmail.com',2),
      subData : null
    },
    {
      data : new Student(UsefulService.generateUuid(),'kevin owner','kevin@hotmail.com',2),
      subData : null
    },
    {
      data : new Student(UsefulService.generateUuid(),'stone austin','stone@hotmail.com',2),
      subData : null
    }
  ]

  // form create
  public formGroupCreate: FormGroup;
  public formTitleCreate: string;
  public dynamicIconFormsKeyFilterCreate: DynamicIconFormKeyFilter[];

  // form update
  public enableFormGroupUpdate: boolean = true;
  public formGroupUpdate: FormGroup;
  public formTitleUpdate: string;
  public dynamicIconFormsKeyFilterUpdate: DynamicIconFormKeyFilter[];


  // table
  /*@ViewChild(DynamicTreeTableComponent)
  private dynamicTreeTableComponent! : DynamicTreeTableComponent;*/

  public headerColumns : HeaderColumn[]
  public data : DataTreeTable<Student>[]
  public id : string
  public tableTitle : string
  public scrollable : boolean
  public paginator : boolean
  public rowsScope : number

  constructor(private changeDetector : ChangeDetectorRef) { // for form group update

    // form create
    this.formGroupCreate = new FormGroup({})
    this.formTitleCreate = 'Create Student'
    const uuid = new DynamicIconFormKeyFilter('ID', 'uuid', new FormControl('Example '+UsefulService.generateUuid(), Validators.required), 'uuid-id', false).setInputText(true).setPKeyFilter(null).setReadOnly(true);
    const fullName = new DynamicIconFormKeyFilter('Full name', 'fullName', new FormControl(null, Validators.required), 'full-name-id', false).setInputText(true).setPKeyFilter(null).setPlaceholder('Full name...')
    const email = new DynamicIconFormKeyFilter('pi pi-at', 'email', new FormControl(null, Validators.required), 'email-id', true).setInputText(true).setPKeyFilter('email').setPlaceholder('Email...')
    const year = new DynamicIconFormKeyFilter('Year', 'year', new FormControl(1, Validators.required), 'year-id', false).setInputText(true).setPKeyFilter('int')
    this.dynamicIconFormsKeyFilterCreate = [
      uuid,
      fullName,
      email,
      year
    ]


    // form update
    this.formGroupUpdate = new FormGroup({})
    this.formTitleUpdate = 'Update Student'
    const uuidEdit = new DynamicIconFormKeyFilter('ID', 'uuid', new FormControl(null, Validators.required), 'uuid-edit-id', false).setInputText(true).setPKeyFilter(null).setReadOnly(true);
    const fullNameEdit = new DynamicIconFormKeyFilter('Full name', 'fullName', new FormControl(null, Validators.required), 'full-name-edit-id', false).setInputText(true).setPKeyFilter(null).setPlaceholder('Full name...').setReadOnly(true)
    const emailEdit = new DynamicIconFormKeyFilter('pi pi-at', 'email', new FormControl(null, Validators.required), 'email-edit-id', true).setInputText(true).setPKeyFilter('email').setPlaceholder('Email...').setReadOnly(true)
    const yearEdit = new DynamicIconFormKeyFilter('Year', 'year', new FormControl(null, Validators.required), 'year-edit-id', false).setInputText(true).setPKeyFilter('int').setReadOnly(true)
    this.dynamicIconFormsKeyFilterUpdate = [
      uuidEdit,
      fullNameEdit,
      emailEdit,
      yearEdit
    ]


    // table
    this.tableTitle = 'Students List'
    this.id = 'students-list-id'
    this.scrollable = true
    this.paginator = true
    this.rowsScope = 5
    this.data = UsefulService.convertModelToDataTreeTable(this.studentsFormApiFormat)
    this.headerColumns = UsefulService.convertObjectToHeaderColumns(this.studentsFormApiFormat[0].data)

  }

  ngAfterViewInit(): void {
    this.enableFormGroupUpdate = false
    this.changeDetector.detectChanges()
  }

  ngOnInit(): void {

  }

  // form create
  public setInitialFormGroupCreate($event: FormGroup) {
    this.formGroupCreate = $event;
    console.log(this.formGroupCreate);
  }

  public setSubmitEventFormGroupCreate() {
    console.log('get submit')
    if (this.formGroupCreate.valid) {
      const values = this.formGroupCreate.value
      const newStudent = new Student(UsefulService.generateUuid(),values.fullName,values.email,Number(values.year))

      this.studentsFormApiFormat.push({
        data : newStudent,
        subData : null
      })

      this.loadData();

    }

  }

  public setClearEventFormGroupCreate() {
    console.log('get clear')
    this.formGroupCreate.reset()
  }


  // form update
  public setInitialFormGroupUpdate($event: FormGroup) {
    this.formGroupUpdate = $event;
    console.log('form update ',this.formGroupUpdate);
  }

  public setSubmitEventFormGroupUpdate() {
    console.log('get submit')
    this.studentsFormApiFormat.forEach((item) => {
      let data = item.data
      const form = this.formGroupUpdate
      if (data.uuid === form.get('uuid')?.value) {
        data.fullName = form.get('fullName')?.value
        data.email = form.get('email')?.value
        data.year = Number(form.get('year')?.value)
      }
    })
    this.loadData();
  }

  public setClearEventFormGroupUpdate() {
    console.log('get clear')
    this.formGroupUpdate.reset()
    this.dynamicIconFormsKeyFilterUpdate.forEach(item => {
      item.setReadOnly(true)
    })
  }


  // table
  protected setInitialData($event: DataTreeTable<Student>[]) {
    this.data = $event // bind data
  }

  public setEditEventTreeTable($even : any) {
    // console.log('get edit',$even)
    this.enableFormGroupUpdate = true

    this.dynamicIconFormsKeyFilterUpdate.forEach((item) => {
      if (item.formControlName !== 'uuid') {
        item.setReadOnly(false);
      }
    })

    // set value on form group
    this.formGroupUpdate.get('uuid')?.setValue($even.uuid)
    this.formGroupUpdate.get('fullName')?.setValue($even.fullName)
    this.formGroupUpdate.get('email')?.setValue($even.email)
    this.formGroupUpdate.get('year')?.setValue(Number($even.year))
  }

  public setRemoveEventTreeTable($even : any) {
    // console.log('get remove')
    this.studentsFormApiFormat = this.studentsFormApiFormat.filter((item) => item.data.uuid !== $even.uuid)
    this.loadData();
  }

  private loadData() {
    this.data = UsefulService.convertModelToDataTreeTable(this.studentsFormApiFormat)
  }
}
