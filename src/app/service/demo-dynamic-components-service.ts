import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DynamicIconForm} from "../entities/dynamic-icon-form";
import {Product} from "../entities/product";
import {User} from "../entities/user";
import {Student} from "../entities/student";
import {File} from "../entities/file";
import {DataTreeTable} from "../entities/data-tree-table";
import {Client} from "../entities/client";
import {Software} from "../entities/software";
import {HeaderColumn} from "../entities/header-column";
import {TreeNode} from "primeng/api";
import {DynamicDialogForm} from "../entities/dynamic-dialog-form";
import {DynamicDialogConfirm} from "../entities/dynamic-dialog-confirm";
// import {DynamicIconForm} from "../models/icon-form/dynamic-icon-form";
// import {DynamicIconFormKeyFilter} from "../models/icon-form-keyfilter/dynamic-icon-form-keyfilter";
// import {File} from "../models/entities/file";
// import {Student} from "../models/entities/student";
// import {User} from "../models/entities/user";
// import {Product} from "../models/entities/product";
// import {UsefulService} from "./useful-service";
// import {HeaderColumn} from "../models/tree-table/header-column";
// import {DataTreeTable} from "../models/tree-table/data-tree-table";
// import {TreeNode} from "primeng/api";
// import {Client} from "../models/entities/client";
// import {Software} from "../models/entities/software";
// import {DynamicDialogConfirm} from "../models/dialog-confirm/dynamic-dialog-confirm";
// import {DynamicDialogKeyFilter} from "../models/dialog-keyfilter/dynamic-dialog-keyfilter";


// Demo pass dynamic
/*export class DemoDynamicIconForm {

  public formGroup: FormGroup;
  public formTitle: string;
  public dynamicIconForms: DynamicIconForm[];

  constructor() {

    this.formGroup = new FormGroup({})
    this.formTitle = "Dynamic Icon Form Group"
    this.dynamicIconForms = []
    // dropdown
    const cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
    ];
    // checkbox
    const skills = [
      {name: "Java", key: "J"},
      {name: "Kotlin", key: "K"},
      {name: "Spring Boot", key: "SB"},
      {name: "Spring", key: "S"},
      {name: "C#", key: "CS"},
      {name: ".Net", key: "DN"},
    ]
    // radio button
    const categories = [
      {name: 'Accounting', key: 'A'},
      {name: 'Marketing', key: 'M'},
      {name: 'Production', key: 'P'},
      {name: 'Research', key: 'R'}
    ];



    const cashFieldAsNumber = new DynamicIconForm('$', 'cash', new FormControl(10, Validators.required), 'cash-id', false).setNumber(true)
    const usernameFieldAsString = new DynamicIconForm('Username', 'username', new FormControl(null, Validators.required), 'username-id', false).setPlaceholder('Username or nickname...')
    const transferFieldAsFloat = new DynamicIconForm('pi pi-building-columns', 'transfer', new FormControl(0, Validators.required), 'transfer-id', true).setCurrency(true)
    const ratingFieldAsDecimal = new DynamicIconForm('pi pi-star-fill', 'rating', new FormControl(null, Validators.required), 'rating-id', true).setPlaceholder('0.0').setDecimal(true)
    const emailFieldAsStringHaveType = new DynamicIconForm('@', 'email', new FormControl(null, Validators.required), 'email-id', false).setType('email').setPlaceholder('xxx@hotmail.com')
    const cityFieldAsDropdown = new DynamicIconForm('pi pi-map', 'map', new FormControl(null, Validators.required), 'map-id', true).setPlaceholder('Select one').setDropdown({
      status: true,
      options: cities
    })
    const addressFieldAsTextarea = new DynamicIconForm('Address', 'address', new FormControl(null, Validators.required), 'address-id', false).setPlaceholder('(Optional)').setTextarea(true)
    // ** in checkbox & radio have to set isIconExist to be null because i do not want to open icon mode
    const skillFieldAsCheckbox = new DynamicIconForm(null, 'skills', new FormControl(null, Validators.required), 'skills-id', null).setCheckbox({
      status: true,
      options: skills
    })
    const categoryFieldAsRadio = new DynamicIconForm(null, 'categories', new FormControl(null, Validators.required), 'categories-id', null).setRadio({
      status: true,
      options: categories
    })
    const weightFieldAsDecimal = new DynamicIconForm('pi pi-gauge', 'weight', new FormControl(0, Validators.required), 'weight-id', true).setDecimal(true)

    // add dynamic icon form to array dynamic icon form ** order is importance
    this.dynamicIconForms.push(cashFieldAsNumber)
    this.dynamicIconForms.push(usernameFieldAsString)
    this.dynamicIconForms.push(transferFieldAsFloat)
    this.dynamicIconForms.push(ratingFieldAsDecimal)
    this.dynamicIconForms.push(emailFieldAsStringHaveType)
    this.dynamicIconForms.push(cityFieldAsDropdown)
    this.dynamicIconForms.push(addressFieldAsTextarea)
    this.dynamicIconForms.push(skillFieldAsCheckbox)
    this.dynamicIconForms.push(categoryFieldAsRadio)
    // this.dynamicIconForms.push(weightFieldAsDecimal)
    // add dynamic icon form to form group
    /!*for (let i = 0; i < this.dynamicIconForms.length; i++) {
      this.formGroup.addControl(this.dynamicIconForms[i].formControlName!, this.dynamicIconForms[i].formControl)
    }*!/
  }

}*/


export class DemoDynamicIconForm {

  public formGroup: FormGroup;
  public formTitle: string;
  public dynamicIconForms: DynamicIconForm[];

  constructor() {
    this.formGroup = new FormGroup({})
    this.formTitle = "Dynamic Icon Form Group (Key Filter Concept)"
    this.dynamicIconForms = []
    // dropdown
    const cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
    ];
    // checkbox
    const skills = [
      {name: "Java", key: "J"},
      {name: "Kotlin", key: "K"},
      {name: "Spring Boot", key: "SB"},
      {name: "Spring", key: "S"},
      {name: "C#", key: "CS"},
      {name: ".Net", key: "DN"},
    ]
    // radio button
    const categories = [
      {name: 'Accounting', key: 'A'},
      {name: 'Marketing', key: 'M'},
      {name: 'Production', key: 'P'},
      {name: 'Research', key: 'R'}
    ];


    // ** ref on primeng.org/keyfilter
    const cashFieldAsNumber: DynamicIconForm = {
      icon: '$',
      formControlName: 'cash',
      formControl: new FormControl(10, Validators.required),
      id: 'cash',
      isReadOnly: false,
      isInputText: true,
      isRadio: null,
      isDropdown: null,
      isCheckbox: null,
      isTextarea: null,
      pKeyFilter: 'int',  // int = only integer as number as 123
      placeholder: null,

    }

    const usernameFieldAsString: DynamicIconForm = {
      icon: 'Username',
      formControlName: 'username',
      formControl: new FormControl(null, Validators.required),
      id: 'username',
      isReadOnly: false,
      isInputText: true,
      isRadio: null,
      isDropdown: null,
      isCheckbox: null,
      isTextarea: null,
      pKeyFilter: 'alpha',  // alpha = only char as abc... (without all sign and space)
      placeholder: 'Username or nickname...'
    }

    const messageFieldAsString: DynamicIconForm = {
      icon: 'Message',
      formControlName: 'message',
      formControl: new FormControl(null, Validators.required),
      id: 'message',
      isReadOnly: false,
      isInputText: true,
      isRadio: null,
      isDropdown: null,
      isCheckbox: null,
      isTextarea: null,
      pKeyFilter: null,  // null = any char
      placeholder: 'Message...'
    }

    const transferFieldAsFloat: DynamicIconForm = {
      icon: 'pi pi-building-columns',
      formControlName: 'transfer',
      formControl: new FormControl(null, Validators.required),
      id: 'transfer',
      isReadOnly: false,
      isIconExist: true,
      isInputText: true,
      isRadio: null,
      isDropdown: null,
      isCheckbox: null,
      isTextarea: null,
      pKeyFilter: 'money', // money = only decimal and comma as 1,000.00 or 1000 , 1000.00
      placeholder: null
    }

    const ratingFieldAsDecimal: DynamicIconForm = {
      icon: 'pi pi-star-fill',
      formControlName: 'rating',
      formControl: new FormControl(null, Validators.required),
      id: 'rating',
      isReadOnly: false,
      isIconExist: true,
      isInputText: true,
      isRadio: null,
      isDropdown: null,
      isCheckbox: null,
      isTextarea: null,
      pKeyFilter: 'num', // ** num = only decimal and dot as 1000.00 or 1000
      placeholder: '0.0'
    }

    const emailFieldAsStringAsEmail: DynamicIconForm = {
      icon: '@',
      formControlName: 'email',
      formControl: new FormControl(null, Validators.required),
      id: 'email',
      isReadOnly: false,
      isInputText: true,
      isRadio: null,
      isDropdown: null,
      isCheckbox: null,
      isTextarea: null,
      pKeyFilter: 'email', // ** email = type email but more validate then default email
      placeholder: 'xxx@hotmail.com'
    }

    // Dropdown buttons
    const cityFieldAsDropdown: DynamicIconForm = {
      icon: 'pi pi-map',
      formControlName: 'map',
      formControl: new FormControl(null, Validators.required),
      id: 'map',
      isReadOnly: false,
      isIconExist: true,
      isInputText: null,
      isRadio: null,
      isDropdown: [
        {
          key: '0',
          label: 'Documents',
          data: 'Documents Folder',
          icon: 'pi pi-fw pi-inbox',

        },
        {
          key: '1',
          label: 'Work',
          data: 'Work Folder',
          icon: 'pi pi-fw pi-cog',
        }
        ,
        {
          key: '2',
          label: 'Home',
          data: 'Home Folder',
          icon: 'pi pi-fw pi-home',
        }
      ],
      isCheckbox: null,
      isTextarea: null,
      placeholder: 'Select one'
    }


    // Checkbox buttons
    const skillFieldAsCheckbox: DynamicIconForm = {
      icon: null,
      isIconExist: null,
      formControlName: 'skills',
      formControl: new FormControl(null, Validators.required),
      id: 'skills',
      isReadOnly: false,
      isInputText: null,
      isRadio: null,
      isDropdown: null,
      isCheckbox: {
        status: true,
        options: skills
      },
      isTextarea: null,
    }


    const addressFieldAsTextarea: DynamicIconForm = {
      icon: 'Address',
      isIconExist: null,
      formControlName: 'address',
      formControl: new FormControl(null, Validators.required),
      id: 'address',
      isReadOnly: false,
      isInputText: null,
      isRadio: null,
      isDropdown: null,
      isCheckbox: null,
      isTextarea: true,
      placeholder: '(Optional)'
    }

    // Radio buttons
    const categoryFieldAsRadio: DynamicIconForm = {
      icon: null,
      isIconExist: null,
      formControlName: 'categories',
      formControl: new FormControl(null, Validators.required),
      id: 'categories',
      isReadOnly: false,
      isInputText: null,
      isRadio: {
        status: true,
        options: categories
      },
      isDropdown: null,
      isCheckbox: null,
      isTextarea: null,
      placeholder: null
    }

    const weightFieldAsDecimal: DynamicIconForm = {
      icon: 'pi pi-gauge',
      isIconExist: true,
      formControlName: 'weight',
      formControl: new FormControl(null, Validators.required),
      id: 'weight',
      isReadOnly: false,
      isInputText: true,
      isRadio: null,
      isDropdown: null,
      isCheckbox: null,
      isTextarea: null,
      pKeyFilter: 'int',  // ** int = integer
      placeholder: '0',
    }


    // Date
    const birthdayFieldAsDate: DynamicIconForm = {
      icon: 'pi pi-calendar',
      isIconExist: true,
      formControlName: 'birthday',
      formControl: new FormControl(null, Validators.required),
      id: 'birthday',
      isReadOnly: false,
      isInputText: null,
      isRadio: null,
      isDropdown: null,
      isCheckbox: null,
      isTextarea: null,
      isDate: true
    }

    this.dynamicIconForms.push(cashFieldAsNumber)
    this.dynamicIconForms.push(usernameFieldAsString)
    this.dynamicIconForms.push(messageFieldAsString)
    this.dynamicIconForms.push(transferFieldAsFloat)
    this.dynamicIconForms.push(ratingFieldAsDecimal)
    this.dynamicIconForms.push(emailFieldAsStringAsEmail)
    this.dynamicIconForms.push(cityFieldAsDropdown)
    this.dynamicIconForms.push(skillFieldAsCheckbox)
    this.dynamicIconForms.push(addressFieldAsTextarea)
    this.dynamicIconForms.push(categoryFieldAsRadio)
    this.dynamicIconForms.push(weightFieldAsDecimal)
    this.dynamicIconForms.push(birthdayFieldAsDate)


    for (let i = 0; i < this.dynamicIconForms.length; i++) {
      this.formGroup.addControl(this.dynamicIconForms[i].formControlName!, this.dynamicIconForms[i].formControl)
    }

  }
}

// Demo pass dynamic

// Demo pass dynamic
export class DemoDynamicTreeTable {

  // assume this from api i have to convert to data as format as DataTreeTable
  private files: { data: File, subData: File[] | null }[] = [
    {
      data: new File("Applications", "200mb", "Folder"),
      subData: [
        new File("Angular App", "25mb", "Folder"),
        new File("React App", "35mb", "Folder"),
        new File("Spring Boot App", "75mb", "Folder"),
      ]
    },
    {
      data: new File("Cloud", "20mb", "Folder"),
      subData: [
        new File("Angular App", "25mb", "Folder"),
        new File("React App", "35mb", "Folder"),
        new File("Spring Boot App", "75mb", "Folder"),
      ]
    },
    {
      data: new File("Documents", "72kb", "Folder"),
      subData: null
    },
    {
      data: new File("Word", "1200mb", "Folder"),
      subData: null
    },
    {
      data: new File("Excel", "950mb", "Folder"),
      subData: null
    },
    {
      data: new File("PDF", "740mb", "Folder"),
      subData: [
        new File("Angular App", "25mb", "Folder"),
        new File("React App", "35mb", "Folder"),
      ]
    },
  ]
  private students: { data: Student, subData: Student[] | null }[] = [
    {
      data: new Student('ef326394-66a6-47ef-903c-68eb101be665', 'alex slider', 'alex@hotmail.com', 3),
      subData: [
        new Student('', 'alun slider', 'alun@hotmail.com', 2),
        new Student('', 'ajax slider', 'ajax@hotmail.com', 1),
      ]
    },
    {
      data: new Student('65169241-762c-4a69-87eb-48a697420fe6', 'max runner', 'max@hotmail.com', 4),
      subData: null
    },
    {
      data: new Student('445fd31a-4327-4c76-83c1-4a9dc5892202', 'slam runner', 'slam@hotmail.com', 2),
      subData: [
        new Student('', 'jacky runner', 'jacky@hotmail.com', 1),
        new Student('', 'frok runner', 'frok@hotmail.com', 1),
        new Student('', 'austin runner', 'austin@hotmail.com', 1),
      ]
    },
    {
      data: new Student('65169241-762c-4a69-87eb-41a697420fe1', 'ood slider', 'ood@hotmail.com', 1),
      subData: null
    },
    {
      data: new Student('65169241-762c-4a61-82eb-41a697220fe1', 'kevin nash', 'kevin@hotmail.com', 2),
      subData: null
    },
    {
      data: new Student('61169211-662c-4e61-82eb-41a697210fe1', 'max helloway', 'max@hotmail.com', 3),
      subData: null
    },
  ]
  private users: { data: User, subData: User[] | null } [] = [
    {
      data: new User(1, 'a@hotmail.com', '12345', 'a', 'slider'),
      subData: [
        new User(1, 'a_c@hotmail.com', '32134', 'a', 'slider'),
        new User(2, 'a_d@hotmail.com', '98712', 'a', 'slider')
      ]
    },
    {
      data: new User(2, 'b@hotmail.com', '12345', 'b', 'owner'),
      subData: null
    },
    {
      data: new User(3, 'c@hotmail.com', '12345', 'c', 'chap'),
      subData: null
    }
    ,
    {
      data: new User(4, 'k@hotmail.com', '12345', 'k', 'kevin'),
      subData: null
    },
    {
      data: new User(5, 'm@hotmail.com', '12345', 'm', 'maxky'),
      subData: null
    },
    {
      data: new User(6, 'i@hotmail.com', '12345', 'i', 'ice'),
      subData: null
    }
  ]
  private products: { data: Product, subData: Product[] | null } [] = [
    {
      data: new Product('ef326394-66a6-47ef-903c-68eb101be661', 1, 'A/C Drink', '/a-c-drink.png', 250.00),
      subData: null
    },
    {
      data: new Product('ef326394-62a6-47ef-903c-68eb101be665', 2, 'PP Energy', '/pp-energy.png', 50.00),
      subData: null
    },
    {
      data: new Product('ef126394-66a6-47ef-903c-68eb101be665', 3, 'ABC Drink', '/abc-drink.png', 70.00),
      subData: null
    }
    ,
    {
      data: new Product('ef426394-66a6-47ef-903c-68eb101be665', 4, 'Aj Shirt', '/aj-shirt.png', 150.00),
      subData: null
    },
    {
      data: new Product('ef326354-66a6-47ef-903c-68eb101be665', 5, 'CnC Shirt', '/c-n-c-shirt.png', 170.00),
      subData: null
    },
    {
      data: new Product('ef326774-66a6-47ef-903c-68eb101be665', 6, 'Li Energy', '/li-energy.png', 110.00),
      subData: null
    }
  ]
  // if you don't need to convert to data as format as DataTreeTable  your api should return like below
  private clients: DataTreeTable<Client>[] = [
    {
      data: new Client(1, 'a@hotmail.com', '12345', 'a', 'slider'),
      children: []
    },
    {
      data: new Client(2, 'b@hotmail.com', '12345', 'b', 'owner'),
      children: []
    },
    {
      data: new Client(3, 'c@hotmail.com', '12345', 'c', 'chap'),
      children: [
        {
          data: new Client(3, 'e@hotmail.com', '12345', 'e', 'express')
        },
        {
          data: new Client(3, 'f@hotmail.com', '12345', 'f', 'frank')
        },
        {
          data: new Client(3, 'g@hotmail.com', '12345', 'g', 'gang')
        }
      ]
    }
    ,
    {
      data: new Client(4, 'k@hotmail.com', '12345', 'k', 'kevin'),
      children: []
    },
    {
      data: new Client(5, 'm@hotmail.com', '12345', 'm', 'maxky'),
      children: []
    },
    {
      data: new Client(6, 'i@hotmail.com', '12345', 'i', 'ice'),
      children: []
    }
  ]
  private software: DataTreeTable<Software>[] = [
    {
      data: new Software("The Weather", "1.5GB", "Folder"),
      children: []
    },
    {
      data: new Software("Car Shop", "3.1GB", "Folder"),
      children: []
    },
    {
      data: new Software("Gadgets House", "1GB", "Folder"),
      children: [
        {
          data: new Software("Gadgets House", "800MB", "Folder")
        },
        {
          data: new Software("Gadgets House", "600MB", "Folder")
        }
      ]
    },
    {
      data: new Software("Books Shop", "8GB", "Folder"),
      children: []
    },
    {
      data: new Software("Podcast House", "10GB", "Folder"),
      children: [
        {
          data: new Software("Podcast House", "9GB", "Folder"),
          children: [
            {
              data: new Software("Podcast & JJ House", "9GB", "Folder"),
            },
            {
              data: new Software("Podcast with me", "9GB", "Folder"),
            },
          ] // end children
        }
      ]
    }
  ]

  public id: string
  public tableTitle: string
  public scrollable: boolean
  public paginator: boolean
  public rowsScope: number
  public headerColumns: HeaderColumn[]
  public data: DataTreeTable<any>[]

  constructor() {
    this.tableTitle = 'Users Tree Table'
    this.id = 'dynamic-tree-table'
    this.scrollable = true
    this.paginator = true
    this.rowsScope = 5
    // convert api to format
    this.data = this.convertModelToDataTreeTable(this.users)
    this.headerColumns = this.convertObjectToHeaderColumns(this.data[0].data, [])
    // api is correct format
    /*
     this.data = this.software
     this.headerColumns = this.convertObjectToHeaderColumns(this.data[0].data)
    */
  }

  public convertObjectToHeaderColumns(object: any, ignoreKeys: string[]): HeaderColumn[] {
    let headerColumns = []
    const objectKeys = Object.keys(object)
    for (let key of objectKeys) {
      if (ignoreKeys.indexOf(key) === -1) {
        headerColumns.push({field: key, header: key.toUpperCase()})
      }
    }

    if (ignoreKeys.indexOf('action') === -1) { // if -1 is mean not found
      headerColumns.push({field: 'action', header: 'action'.toUpperCase()})
    }
    // basic mode update & delete buttons
    return headerColumns
  }

  private convertModelToDataTreeTable(model: { data: any, subData: any[] | null } []): DataTreeTable<any>[] {
    let data: DataTreeTable<any>[] = []
    let subData: TreeNode<any>[] = []
    for (let i = 0; i < model.length!; i++) {
      if (model[i].subData?.length! > 0 && model[i].subData !== null) {
        for (let data of model[i].subData!) {
          subData.push({data: data})
        }
      }
      data.push({data: model[i].data, children: subData})
      subData = []
    }
    console.log(data)
    return data
  }
}

// Demo pass dynamic
export class DemoDynamicDialogConfirm {

  public visible: boolean;
  public draggable: boolean;
  public resizable: boolean;
  public dynamicDialogConfirm: DynamicDialogConfirm

  constructor() {

    this.visible = true;
    this.draggable = false;
    this.resizable = false;

    this.dynamicDialogConfirm = {
      icon: 'pi pi-info-circle text-5xl',
      titleDialog: 'Are you sure to submit?',
      content: 'Please confirm to proceed.',
      key: 'confirm'
    }

  }

}

// Demo pass dynamic
export class DemoDynamicDialogForm {
  public formGroup!: FormGroup;
  public formTitle!: string;
  public visible!: boolean;
  public draggable!: boolean;
  public resizable!: boolean;
  public dynamicDialogForms!: DynamicDialogForm[]

  constructor() {
    this.formGroup = new FormGroup({})
    this.formTitle = 'Dynamic Dialog Form Group (Key Filter Concept)'
    this.visible = true;
    this.draggable = false;
    this.resizable = false;
    // ** ref on primeng.org/keyfilter
    const username: DynamicDialogForm = {
      id: 'username',
      label: 'Username',
      formControlName: 'username',
      formControl: new FormControl(null, Validators.required),
      placeholder: 'Username...',
      pKeyFilter: 'alpha', // alpha = only char as abc... (without all sign and space)
      // type : 'text'
    }

    const password: DynamicDialogForm = {
      id: 'password',
      label: 'Password',
      formControlName: 'password',
      formControl: new FormControl(null, Validators.required),
      placeholder: 'Password...',
      pKeyFilter: null, // null = any char
      type: 'password'
    }

    const email: DynamicDialogForm = {
      id: 'email',
      label: 'Email',
      formControlName: 'email',
      formControl: new FormControl(null, Validators.required),
      placeholder: 'Email...',
      pKeyFilter: 'email',  // email = type email but more validate then default email
      // type : 'email'
    }

    const age: DynamicDialogForm = {
      id: 'age',
      label: 'Age',
      formControlName: 'age',
      formControl: new FormControl(null, Validators.required),
      placeholder: 'Age...',
      pKeyFilter: 'int', // int = only integer as number as 123
      // type : 'email'
    }

    const donate: DynamicDialogForm = {
      id: 'donate',
      label: 'Donate',
      formControlName: 'age',
      formControl: new FormControl(null, Validators.required),
      placeholder: 'Donate...',
      pKeyFilter: 'money', // money = only decimal and comma as 1,000.00 or 1000 , 1000.00
      // type : 'email'
    }

    const score: DynamicDialogForm = {
      id: 'score',
      label: 'Score',
      formControlName: 'score',
      formControl: new FormControl(null, Validators.required),
      placeholder: 'Score...',
      pKeyFilter: 'num', // num = only decimal and dot as 1000.00 or 1000
      // type : 'email'
    }

    const birthday: DynamicDialogForm = {
      id: 'birthday',
      label: 'Birthday',
      formControlName: 'birthday',
      formControl: new FormControl(null, Validators.required),
      // placeholder : 'Score...',
      pKeyFilter: null, // num = only decimal and dot as 1000.00 or 1000
      type: 'date'
    }

    this.dynamicDialogForms = [
      username,
      password,
      email,
      age,
      donate,
      score,
      birthday
    ];
  }

}
