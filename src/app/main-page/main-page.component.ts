import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
const { getCourses, deleteCourse } = require('../../assets/js/api');

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public listCoursesPristine: any = null;
  public listCourses: any = null;

  public searchFilter: any = null;
  public priceMinFilter: any = null;
  public priceMaxFilter: any = null;

  constructor() { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData = () => {
    getCourses().then((res: any)=>{
      this.listCoursesPristine = res.reverse();
      this.listCourses = this.listCoursesPristine;
    });
  }

  onFilterUpdated = ()=>{
    console.log('fuck ');
    let filteredData = this.listCoursesPristine.filter((x:any) => x.title.toLowerCase().includes(this.searchFilter.trim().toLowerCase()));
    if(this.priceMaxFilter){
      filteredData = filteredData.filter((x:any) => { parseInt(x.price) < this.priceMaxFilter });
    }
    if(this.priceMinFilter){
      filteredData = filteredData.filter((x:any) => { parseInt(x.price) > this.priceMaxFilter });
    }

    this.listCourses = filteredData;
  }

  deleteItem = (id:any) => [
    deleteCourse(id).then((res: any)=>{
      console.log(res);
      this.fetchData();
    }, ()=>{
      console.log('something went wrong');
    })
  ]

  parseInt = parseInt;
}
