import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DynamicIconForm} from "../models/icon-form/dynamic-icon-form";
import {DynamicIconFormKeyFilter} from "../models/icon-form-keyfilter/dynamic-icon-form-keyfilter";
import {File} from "../models/entities/file";
import {Student} from "../models/entities/student";
import {User} from "../models/entities/user";
import {Product} from "../models/entities/product";
import {UsefulService} from "./useful-service";
import {HeaderColumn} from "../models/tree-table/header-column";
import {DataTreeTable} from "../models/tree-table/data-tree-table";
import {TreeNode} from "primeng/api";
import {Client} from "../models/entities/client";
import {Software} from "../models/entities/software";
import {DynamicDialogConfirm} from "../models/dialog-confirm/dynamic-dialog-confirm";
import {DynamicDialogKeyFilter} from "../models/dialog-keyfilter/dynamic-dialog-keyfilter";


// Demo pass dynamic
export class DemoDynamicIconForm {

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
    /*for (let i = 0; i < this.dynamicIconForms.length; i++) {
      this.formGroup.addControl(this.dynamicIconForms[i].formControlName!, this.dynamicIconForms[i].formControl)
    }*/
  }

}

// Demo pass dynamic
export class DemoDynamicIconFormKeyFilter {
  public formGroup: FormGroup;
  public formTitle: string;
  public dynamicIconFormsKeyFilter: DynamicIconFormKeyFilter[];

  constructor() {
    this.formGroup = new FormGroup({})
    this.formTitle = "Dynamic Icon Form Group Key Filter"
    this.dynamicIconFormsKeyFilter = []
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

    //** ref on primeng.org/keyfilter
    // int = only integer as number as 123
    const cashFieldAsNumber = new DynamicIconFormKeyFilter('$', 'cash', new FormControl(10, Validators.required), 'cash-id', false).setInputText(true).setPKeyFilter('int')
    // alpha = only char as abc... (without all sign and space)
    const usernameFieldAsString = new DynamicIconFormKeyFilter('Username', 'username', new FormControl(null, Validators.required), 'username-id', false).setInputText(true).setPKeyFilter('alpha').setPlaceholder('Username or nickname...')
    // null = any char
    const messageFieldAsString = new DynamicIconFormKeyFilter('Message', 'message', new FormControl(null, Validators.required), 'message-id', false).setInputText(true).setPKeyFilter(null).setPlaceholder('Message...')
    // money = only decimal and comma as 1,000.00 or 1000 , 1000.00
    const transferFieldAsFloat = new DynamicIconFormKeyFilter('pi pi-building-columns', 'transfer', new FormControl(0, Validators.required), 'transfer-id', true).setInputText(true).setPKeyFilter('money')
    // ** num = only decimal and dot as 1000.00 or 1000
    const ratingFieldAsDecimal = new DynamicIconFormKeyFilter('pi pi-star-fill', 'rating', new FormControl(null, Validators.required), 'rating-id', true).setInputText(true).setPlaceholder('0.0').setPKeyFilter('num')
    // ** email = type email but more validate then default email
    const emailFieldAsStringAsEmail = new DynamicIconFormKeyFilter('@', 'email', new FormControl(null, Validators.required), 'email-id', false).setInputText(true).setPlaceholder('xxx@hotmail.com').setPKeyFilter('email')
    const cityFieldAsDropdown = new DynamicIconFormKeyFilter('pi pi-map', 'map', new FormControl(null, Validators.required), 'map-id', true).setPlaceholder('Select one').setDropdown({
      status: true,
      options: cities
    })
    const addressFieldAsTextarea = new DynamicIconFormKeyFilter('Address', 'address', new FormControl(null, Validators.required), 'address-id', false).setPlaceholder('(Optional)').setTextarea(true)
    const skillFieldAsCheckbox = new DynamicIconFormKeyFilter(null, 'skills', new FormControl(null, Validators.required), 'skills-id', null).setCheckbox({
      status: true,
      options: skills
    })
    const categoryFieldAsRadio = new DynamicIconFormKeyFilter(null, 'categories', new FormControl(null, Validators.required), 'categories-id', null).setRadio({
      status: true,
      options: categories
    })
    // ** int = integer
    const weightFieldAsDecimal = new DynamicIconFormKeyFilter('pi pi-gauge', 'weight', new FormControl(0, Validators.required), 'weight-id', true).setInputText(true).setPKeyFilter('int')

    this.dynamicIconFormsKeyFilter.push(cashFieldAsNumber)
    this.dynamicIconFormsKeyFilter.push(usernameFieldAsString)
    this.dynamicIconFormsKeyFilter.push(messageFieldAsString)
    this.dynamicIconFormsKeyFilter.push(transferFieldAsFloat)
    this.dynamicIconFormsKeyFilter.push(ratingFieldAsDecimal)
    this.dynamicIconFormsKeyFilter.push(emailFieldAsStringAsEmail)
    this.dynamicIconFormsKeyFilter.push(cityFieldAsDropdown)
    this.dynamicIconFormsKeyFilter.push(addressFieldAsTextarea)
    this.dynamicIconFormsKeyFilter.push(skillFieldAsCheckbox)
    this.dynamicIconFormsKeyFilter.push(categoryFieldAsRadio)
    this.dynamicIconFormsKeyFilter.push(weightFieldAsDecimal)

    /*for (let i = 0; i < this.dynamicIconFormsKeyFilter.length; i++) {
      this.formGroup.addControl(this.dynamicIconFormsKeyFilter[i].formControlName!, this.dynamicIconFormsKeyFilter[i].formControl)
    }
    console.log(this.formGroup)*/
  }
}

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
        new User(null, 'a@hotmail.com', '32134', 'a', 'slider'),
        new User(null, 'a@hotmail.com', '98712', 'a', 'slider')
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
    this.headerColumns = this.convertObjectToHeaderColumns(this.data[0].data)
    // api is correct format
    /*
     this.data = this.software
     this.headerColumns = this.convertObjectToHeaderColumns(this.data[0].data)
    */
  }

  private convertObjectToHeaderColumns(object: any): HeaderColumn[] {
    let headerColumns = []
    const objectKeys = UsefulService.getObjectKeys(object)
    for (let key of objectKeys) {
      headerColumns.push({field: key, header: key.toUpperCase()})
    }
    headerColumns.push({field: 'action', header: 'action'.toUpperCase()})
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

    this.dynamicDialogConfirm = new DynamicDialogConfirm(
      'pi pi-info-circle', // can use fortawesome
      {
        'color': '#14c389',
        'font-size': '1.3rem',
        'padding-top': '15px'
      },
      'confirm',
      'Confirm submit',
      'Are you sure to submit?'
    )

   /* this.dynamicDialogConfirm = new DynamicDialogConfirm(
      'pi pi-exclamation-triangle',
      {
        'color': '#d8a704',
        'font-size': '1.3rem'
      },
      'warn',
      'Warning invalid path',
      'Please access another path'
      )
*/
    /*this.dynamicDialogConfirm = new DynamicDialogConfirm(
      'pi pi-minus-circle',
      {
        'color': '#f80237',
        'font-size': '1.3rem'
      },
      'error',
      'Error message',
      'You are not admin!'
    )*/
  }

}


export class DemoDynamicDialogKeyFilter {
  public formGroup! : FormGroup;
  public formTitle! : string;
  public visible!: boolean ;
  public draggable!: boolean ;
  public resizable!: boolean ;
  public dynamicDialogKeyFilters! :DynamicDialogKeyFilter[]

  constructor() {
    this.formGroup = new FormGroup({})
    this.formTitle = 'Dynamic Dialog Key Filter'
    this.visible = true;
    this.draggable = false;
    this.resizable = false;
    // ** ref on primeng.org/keyfilter
    this.dynamicDialogKeyFilters =[
      // alpha = only char as abc... (without all sign and space)
      new DynamicDialogKeyFilter('username-id','Username','username',new FormControl(null,Validators.required),'...','alpha'),
      // null = any char
      new DynamicDialogKeyFilter('password-id','Password','password',new FormControl(null,Validators.required),'****',null,'password'),
      // email = type email but more validate then default email
      new DynamicDialogKeyFilter('email-id','Email','email',new FormControl(null,Validators.required),'abc@hotmail.com','email'),
      // int = only integer as number as 123
      new DynamicDialogKeyFilter('age-id','Age','age',new FormControl(18,Validators.required),null,'int'),
      // money = only decimal and comma as 1,000.00 or 1000 , 1000.00
      new DynamicDialogKeyFilter('donate-id','Donate','donate',new FormControl(1000,Validators.required),null,'money'),
      // num = only decimal and dot as 1000.00 or 1000
      new DynamicDialogKeyFilter('score-id','Score','score',new FormControl(0.1,Validators.required),null,'num'),
    ];
  }
}
