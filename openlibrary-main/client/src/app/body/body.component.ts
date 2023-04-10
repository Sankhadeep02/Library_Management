import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  myForm: FormGroup;

    data:any = {};

    publisher:boolean = false;
    admin_:boolean = false;
    author:boolean = false;
    book:boolean = false;
    loan:boolean = false;
    student:boolean = false;


    url = 'http://localhost:8080/'

  

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.myForm = this.fb.group({
      inputValue: ''
    });

    
  }


  ngOnInit() {

    this.data;

  }


  onClickAdmin() {
    const id = this.myForm.controls['inputValue'].value;




    this.http.get<any>(this.url+'admin/findById/'+id).subscribe(data => {
      this.data = data;  

      this.admin_ = true;
      this.author = false;
      this.student = false;
      this.loan = false;
      this.book = false;
      this.publisher = false;

    });
  }

  onClickAuthor() {
    const id = this.myForm.controls['inputValue'].value;
    
    this.http.get<any>(this.url+'author/findById/'+id).subscribe(data => {
      this.data = data;  
    
    this.admin_ = false;
    this.author = true;
    this.student = false;
    this.loan = false;
    this.book = false;
    this.publisher = false;
    
    });

    
  }

  onClickStudent() {
    const id = this.myForm.controls['inputValue'].value;
    
    this.http.get<any>(this.url+'student/findById/'+id).subscribe(data => {
      this.data = data;  


    this.admin_ = false;
    this.author = false;
    this.student = true;
    this.loan = false;
    this.book = false;
    this.publisher = false;
    });

    

    console.log(this.data);
  }

  onClickBook() {
    const id = this.myForm.controls['inputValue'].value;
    
    this.http.get<any>(this.url+'books/findById/'+id).subscribe(data => {
      this.data = data;  
    });

    this.admin_ = false;
    this.author = false;
    this.student = false;
    this.loan = false;
    this.book = true;
    this.publisher = false;

    console.log(this.data);
  }

  onClickLoan() {
    const id = this.myForm.controls['inputValue'].value;
    
    this.http.get<any>(this.url+'loan/findById/'+id).subscribe(data => {
      this.data = data;  
    });

    this.admin_ = false;
    this.author = false;
    this.student = false;
    this.loan = true;
    this.book = false;
    this.publisher = false;
  }

  onClickPublisher() {
    const id = this.myForm.controls['inputValue'].value;
    
    this.http.get<any>(this.url+'publisher/findById/'+id).subscribe(data => {
      this.data = data;  
    });

    this.admin_ = false;
    this.author = false;
    this.student = false;
    this.loan = false;
    this.book = false;
    this.publisher = true;
  }

  
}
