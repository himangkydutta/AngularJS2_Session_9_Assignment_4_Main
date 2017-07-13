import {Component,OnInit} from '@angular/core';
import {EmpDetails} from './Models/empDetails';
import {EmpTitle} from './Models/empTitle';
import {MyserviceService} from './Services/myservice.service';
import {MyserviceTitl} from './Services/myserviceTitl.service';

@Component({
    selector:'employee-root',
    templateUrl:'./Views/employee-app.component.html',
    providers:[MyserviceService,MyserviceTitl]
})

export class EmployeeComponent implements OnInit{

    //two way binding of EmpDetails
    currentEmployee:EmpDetails = new EmpDetails();

    // List of employees.
    empList: Array<EmpDetails> = new Array<EmpDetails>();

    // Title list array
    empTitlList:EmpTitle[]=[];

    constructor(private _serviceList:MyserviceService,private _serviceDropDown: MyserviceTitl){
    }

    ngOnInit(){
        this.empList = this._serviceList.getEmp();
        this.empTitlList = this._serviceDropDown.getEmpTitle();
    }

    AddEmployee(){
        this._serviceList.addEmpList(this.currentEmployee);
        this.currentEmployee = new EmpDetails();
    }
  
    
}