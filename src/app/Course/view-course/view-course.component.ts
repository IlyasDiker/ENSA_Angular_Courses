import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
const { getCourse, deleteCourse } = require('../../../assets/js/api');
import { marked } from 'marked';
@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.scss']
})
export class ViewCourseComponent implements OnInit {

  id: any;
  entityItem: any = null;
  contentSanitized: any = '';

  constructor(private route: ActivatedRoute, private router: Router, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['slug'];
    getCourse(this.id).then((res: any)=>{
      this.entityItem = res;
      this.contentSanitized = marked.parse(res.content);
    }, ()=>{
      console.log('no result found');
    })
  }

  deleteItem = (id:any) => [
    deleteCourse(id).then((res: any)=>{
      console.log(res);
      this._snackBar.open("Course Deleted Successfully","Close", {
        duration: 4000
      });
      this.router.navigate(['/']);
    }, ()=>{
      console.log('something went wrong');
    })
  ]

  buyCourse = () => {
    this._snackBar.open("Hey, It's just a demo","Close", {
      duration: 4000
    });
  }

}
