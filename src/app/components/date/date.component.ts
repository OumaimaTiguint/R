import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  b: boolean = false;
  a: boolean = true;
  constructor() { }
  get2020() {
    localStorage.removeItem('date')
    localStorage.setItem('date', "2020")
    this.b = true;
    this.a = false;
    window.location.reload()
  }
  get2021() {
    localStorage.removeItem('date')
    localStorage.setItem('date', "2021")
    this.a = true;
    this.b = false;
    window.location.reload()
  }
  ngOnInit(): void {
  }

}
