import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { FormService } from '../form.service';

export interface Post {
  title: string;
  author: string;
  text: string;
  date: any;
}

@Component({
  selector: 'codelab-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  myform: FormGroup;
  title: FormControl;
  author: FormControl;
  text: FormControl;
  date: Date;
  post: Observable<Post>;
  // posts$: Observable<Post[]>;
  statusMessage = '';
  error = false;

  constructor(private http: HttpClient, 
    private formService: FormService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {
      // this.posts$ = this.formService.repo$.valueChanges();
     }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    // console.l
  }

  createFormControls() {
    this.title = new FormControl('', Validators.required);
    this.author = new FormControl('', Validators.required);
    this.text = new FormControl('', Validators.required);

  }

  createForm() {
    this.myform = new FormGroup({
      title: this.title,
      author: this.author,
      text: this.text
    });
  }

  createpost() {
  }

  onSubmit() {
    if (this.myform.valid) {
      const formValues: any = this.myform.getRawValue();
      // console.log(formValues.title);
      this.formService
        .addPost(
          formValues.title,
          formValues.author,
          formValues.text
        )
        .then(() => {
          this.myform.reset();
        })
        .catch(() => {
          this.statusMessage = 'Error while sending feedback';
          this.error = true;
        });
    }
  }

}
