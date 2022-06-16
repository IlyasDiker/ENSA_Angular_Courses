import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
const { getCourses, deleteCourse } = require('../../assets/js/api');

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public listCourses: any = null;

  constructor() { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData = () => {
    getCourses().then((res: any)=>{
      this.listCourses = res.reverse();
    });
  }

  deleteItem = (id:any) => [
    deleteCourse(id).then((res: any)=>{
      console.log(res);
      this.fetchData();
    }, ()=>{
      console.log('something went wrong');
    })
  ]
}
