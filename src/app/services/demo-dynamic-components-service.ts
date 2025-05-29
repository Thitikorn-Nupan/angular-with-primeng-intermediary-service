import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DynamicIconForm} from "../models/icon-form/dynamic-icon-form";
import {DynamicIconFormKeyFilter} from "../models/icon-form-keyfilter/dynamic-icon-form-keyfilter";
import {File} from "../models/entities/file";
import {Student} from "../models/entities/student";
import {User} from "../models/entities/user";
import {Product} from "../models/entities/product";


// Demo pass dynamic field and initial form group
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
    for (let i = 0; i < this.dynamicIconForms.length; i++) {
      this.formGroup.addControl(this.dynamicIconForms[i].formControlName!, this.dynamicIconForms[i].formControl)
    }
  }

}


export class DemoDynamicIconFormKeyFilter {
  public formGroup : FormGroup;
  public formTitle : string;
  public dynamicIconFormsKeyFilter : DynamicIconFormKeyFilter[];

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
    const cityFieldAsDropdown = new DynamicIconFormKeyFilter('pi pi-map', 'map', new FormControl(null, Validators.required), 'map-id', true).setPlaceholder('Select one').setDropdown({status : true , options : cities})
    const addressFieldAsTextarea = new DynamicIconFormKeyFilter('Address', 'address', new FormControl(null, Validators.required), 'address-id', false).setPlaceholder('(Optional)').setTextarea(true)
    const skillFieldAsCheckbox = new DynamicIconFormKeyFilter(null, 'skills', new FormControl(null, Validators.required), 'skills-id', null).setCheckbox({status: true, options: skills})
    const categoryFieldAsRadio = new DynamicIconFormKeyFilter(null, 'categories', new FormControl(null, Validators.required), 'categories-id', null).setRadio({status: true, options: categories})
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

    for (let i = 0; i < this.dynamicIconFormsKeyFilter.length; i++) {
      this.formGroup.addControl(this.dynamicIconFormsKeyFilter[i].formControlName!, this.dynamicIconFormsKeyFilter[i].formControl)
    }
    console.log(this.formGroup)
  }
}


export class DemoDynamicTreeTable {

  public files : {data : File, subData : File[] | null }[]
  public students : {data : Student, subData : Student[] | null }[]
  public users : {data : User , subData : User[] | null} []
  public products : {data : Product , subData : Product[] | null} []

  public id : string
  public tableTitle : string
  public scrollable : boolean
  public paginator : boolean
  public rowsScope : number

  constructor() {
    // assume this from api i have to convert to data as format as DataTreeTable
    this.files = [
      {
        data :  new File("Applications","200mb","Folder") ,
        subData : [
          new File("Angular App","25mb","Folder"),
          new File("React App","35mb","Folder"),
          new File("Spring Boot App","75mb","Folder"),
        ]
      },
      {
        data :  new File("Cloud","20mb","Folder") ,
        subData : [
          new File("Angular App","25mb","Folder"),
          new File("React App","35mb","Folder"),
          new File("Spring Boot App","75mb","Folder"),
        ]
      },
      {
        data :  new File("Documents","72kb","Folder"),
        subData : null
      },
      {
        data :  new File("Word","1200mb","Folder"),
        subData : null
      },
      {
        data :  new File("Excel","950mb","Folder"),
        subData : null
      },
      {
        data :  new File("PDF","740mb","Folder") ,
        subData : [
          new File("Angular App","25mb","Folder"),
          new File("React App","35mb","Folder"),
        ]
      },
    ]
    this.students  = [
      {
        data : new Student('ef326394-66a6-47ef-903c-68eb101be665','alex slider','alex@hotmail.com',3),
        subData : [
          new Student('','alun slider','alun@hotmail.com',2),
          new Student('','ajax slider','ajax@hotmail.com',1),
        ]
      },
      {
        data : new Student('65169241-762c-4a69-87eb-48a697420fe6','max runner','max@hotmail.com',4),
        subData : null
      },
      {
        data : new Student('445fd31a-4327-4c76-83c1-4a9dc5892202','slam runner','slam@hotmail.com',2),
        subData : [
          new Student('','jacky runner','jacky@hotmail.com',1),
          new Student('','frok runner','frok@hotmail.com',1),
          new Student('','austin runner','austin@hotmail.com',1),
        ]
      },
      {
        data : new Student('65169241-762c-4a69-87eb-41a697420fe1','ood slider','ood@hotmail.com',1),
        subData : null
      },
      {
        data : new Student('65169241-762c-4a61-82eb-41a697220fe1','kevin nash','kevin@hotmail.com',2),
        subData : null
      },
      {
        data : new Student('61169211-662c-4e61-82eb-41a697210fe1','max helloway','max@hotmail.com',3),
        subData : null
      },
    ]
    this.users = [
      {
        data : new User(1,'a@hotmail.com','12345','a','slider'),
        subData : null
      },
      {
        data : new User(2,'b@hotmail.com','12345','b','owner'),
        subData : null
      },
      {
        data : new User(3,'c@hotmail.com','12345','c','chap'),
        subData : null
      }
      ,
      {
        data : new User(4,'k@hotmail.com','12345','k','kevin'),
        subData : null
      },
      {
        data : new User(5,'m@hotmail.com','12345','m','maxky'),
        subData : null
      },
      {
        data : new User(6,'i@hotmail.com','12345','i','ice'),
        subData : null
      }
    ]
    this.products = [
      {
        data : new Product('ef326394-66a6-47ef-903c-68eb101be661',1,'A/C Drink','/a-c-drink.png',250.00),
        subData : null
      },
      {
        data : new Product('ef326394-62a6-47ef-903c-68eb101be665',2,'PP Energy','/pp-energy.png',50.00),
        subData : null
      },
      {
        data : new Product('ef126394-66a6-47ef-903c-68eb101be665',3,'ABC Drink','/abc-drink.png',70.00),
        subData : null
      }
      ,
      {
        data : new Product('ef426394-66a6-47ef-903c-68eb101be665',4,'Aj Shirt','/aj-shirt.png',150.00),
        subData : null
      },
      {
        data : new Product('ef326354-66a6-47ef-903c-68eb101be665',5,'CnC Shirt','/c-n-c-shirt.png',170.00),
        subData : null
      },
      {
        data : new Product('ef326774-66a6-47ef-903c-68eb101be665',6,'Li Energy','/li-energy.png',110.00),
        subData : null
      }
    ]
    this.tableTitle = 'Users Tree Table'
    this.id = 'dynamic-tree-table'
    this.scrollable = true
    this.paginator = true
    this.rowsScope = 5
  }
}
