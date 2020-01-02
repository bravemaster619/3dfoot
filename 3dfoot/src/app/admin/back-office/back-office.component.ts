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
    this.apiService.exportUsers({})
  }

  downloadFile(data) {
    const blob = new Blob([data], {type: 'excel'})
    const url = window.URL.createObjectURL(blob)
    window.open(url)
  }

}
