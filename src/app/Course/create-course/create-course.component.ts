import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
const { createCourse } = require('../../../assets/js/api');

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {
  
  createForm: FormGroup;
  progressForm: any={
    mode: 'determinate',
    value: 0
  };
  categories: any = [
    "Engineering",
    "Software",
    "Hardware",
    "Coding",
    "Javascript",
    "Angular",
    "React",
    "VueJs",
    "Php",
    "Laravel"
  ];

  constructor(private _snackBar: MatSnackBar, private router: Router) { 
    this.createForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null),
      topic: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      coverUrl: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
      avatarUrl: new FormControl(null),
    })
  }

  ngOnInit(): void {
  }

  onSubmit = () =>{
    if(this.createForm.valid){
      this.progressForm.mode= 'indeterminate';
      let payload = {
        title: this.createForm.get('title')?.value,
        content: this.createForm.get('content')?.value,
        price: this.createForm.get('price')?.value,
        cover: this.createForm.get('coverUrl')?.value,
        author: this.createForm.get('author')?.value,
        topic: this.createForm.get('topic')?.value,
        avatar: this.createForm.get('avatarUrl')?.value,
      }
      createCourse(payload).then((res:any)=>{
        this.progressForm.mode = 'determinate';
        this.progressForm.value = 100;
        
        this._snackBar.open("Course created Successfully","Close", {
          duration: 4000
        });

        this.router.navigate(['/course/'+res.id]);

        setTimeout(()=>{
          this.progressForm.value = 0;
        }, 1000)
      })
    }
  }

  onClear = (event: any) =>{
    event.preventDefault();
    this.createForm.reset();
  }

}
