import { Injectable } from '@angular/core';
import {EmpTitle} from '../Models/empTitle';

@Injectable()
export class MyserviceTitl {

  constructor() { }

  empTitLst:EmpTitle[] =[];

  //get Emp title list from array
  getEmpTitle(){

    return this.empTitLst=[{
        id:1,
        Title:"Miss"
    },{
        id:2,
        Title:"Mr"
    },{
        id:2,
        Title:"Mrs"
    }];
  }

}
