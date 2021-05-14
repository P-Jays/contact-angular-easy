import { Injectable } from '@angular/core';
import { isNullOrUndefined } from 'util';
// ini di buat dengan cara $ ionic g service navParam
// tujuan buat ini adalah utk mengambil data dan kirim data

@Injectable({
  providedIn: 'root'
})
export class NavparamService {

  navData:any;
  id;

  constructor() { }

  setNavData(navObj){
    this.navData = navObj;
  }

  getNavData(){
    if(isNullOrUndefined(this.navData)){
      return "No Name"
    }else{
      return this.navData;
    }
  }

  setID(id){
    this.id = id;
  }

  getID(){
    return this.id;
  }
}
