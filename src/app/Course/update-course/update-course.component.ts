import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
const { updateCourse, getCourse } = require('../../../assets/js/api');

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.scss']
})
export class UpdateCourseComponent implements OnInit {

  id: any;
  updateForm: FormGroup;
  progressForm: any={
    mode: 'determinate',
    value: 0
  };

  constructor( private route: ActivatedRoute, private _snackBar: MatSnackBar) {
    this.updateForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null),
      coverUrl: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
      avatarUrl: new FormControl(null),
    })
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['slug'];
    getCourse(this.id).then((res: any)=>{
      this.updateForm.get('title')?.setValue(res.title);
      this.updateForm.get('content')?.setValue(res.content);
      this.updateForm.get('coverUrl')?.setValue(res.cover);
      this.updateForm.get('author')?.setValue(res.author);
      this.updateForm.get('avatarUrl')?.setValue(res.avatar);
    }, ()=>{
      console.log('no result found');
    })
  }

  

  onSubmit = () =>{
    if(this.updateForm.valid){
      this.progressForm.mode= 'indeterminate';
      let payload = {
        title: this.updateForm.get('title')?.value,
        content: this.updateForm.get('content')?.value,
        cover: this.updateForm.get('coverUrl')?.value,
        author: this.updateForm.get('author')?.value,
        topic: "error",
        avatar: this.updateForm.get('avatarUrl')?.value,
      }
      updateCourse(this.id, payload).then((res:any)=>{
        this.progressForm.mode = 'determinate';
        this.progressForm.value = 100;
        
        this._snackBar.open("Course updated Successfully","Close", {
          duration: 4000
        });

        setTimeout(()=>{
          this.progressForm.value = 0;
        }, 1000)
      })
    }
  }
}
