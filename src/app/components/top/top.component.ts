import { ServiceService } from './../../service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  twentyone:Observable<any>
  twenty:Observable<any>
  numbooks: number;
  pagesAr = []
  totalPages: number;
  date: string;
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.date = localStorage.getItem('date')
    if(this.date == undefined) {
      this.pagesAr = []
      this.twentyone = this.service.get2021()
      this.twentyone.subscribe(res => {
        this.numbooks = res.length;
        res.map(e=> {
          this.pagesAr.push(e.pages)
        })
        this.totalPages = this.pagesAr.reduce((a, b) => a + b, 0)
    }) 
    } else if(this.date === "2020") {
      this.pagesAr = []
      this.twenty = this.service.get2020()
      this.twenty.subscribe(res => {
        this.numbooks = res.length;
        res.map(e=> {
          this.pagesAr.push(e.pages)
        })
        this.totalPages = this.pagesAr.reduce((a, b) => a + b, 0)
      })  
    } else if(this.date === "2021") {
      this.pagesAr = []
      this.twentyone = this.service.get2021()
      this.twentyone.subscribe(res => {
        this.numbooks = res.length;
        res.map(e=> {
          this.pagesAr.push(e.pages)
        })
        this.totalPages = this.pagesAr.reduce((a, b) => a + b, 0)
    })  
    }
  }
}
