import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent {

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}

  url:string = 'http://localhost:8080/'

  data:any = {}

  method:string = ""
  id:string=""

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.method = params['method'];

      console.log(this.id);
      console.log(this.method);
    });
  }


  myForm = new FormGroup({
    name: new FormControl(''),
    rollNumber : new FormControl(''),
    department : new FormControl(''),
    mobileNumber : new FormControl(''),
    birthDate : new FormControl(''),
  });

  onSubmit() {

    if(this.method == "update"){
      try {
        this.update(this.myForm.value).subscribe(() => {
          console.log(`Students updated`);
          this.router.navigate(['/student']);

        });
      } catch (e) {
        console.log(e);
      }
    }
    

      if(this.method == "addstudent"){
      try {
        this.save(this.myForm.value).subscribe(() => {
          console.log(`Student added`);
          this.router.navigate(['/student']);

        });
      } catch (e) {
        console.log(e);
      }
    }
  }

  update(body: any){
    return this.http.put(this.url + `student/update`, {id : this.id, ...body});
  }
  
  save(body: any) {
    return this.http.post(this.url + `student/save`, body);
  }
}
