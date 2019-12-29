import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.scss']
})
export class BackOfficeComponent implements OnInit {

  constructor(private apiService: ApiService
  ) {

  }

  ngOnInit() {
  }

  getUsers(){
    // @author bravemaster
    return this.apiService.exportUsers({format: 'excel'}).subscribe(res => console.log(res))
  }

}
