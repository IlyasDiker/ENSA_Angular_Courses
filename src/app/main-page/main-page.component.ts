import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
import { getCourses } from '../../assets/js/js';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public listCourses: any = null;

  constructor() { }

  ngOnInit(): void {
    let res = getCourses()
  }

}
