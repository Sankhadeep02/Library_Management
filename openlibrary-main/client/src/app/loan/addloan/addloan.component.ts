import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-addloan',
  templateUrl: './addloan.component.html',
  styleUrls: ['./addloan.component.css']
})
export class AddloanComponent {
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
    bookId: new FormControl(''),
    studentId : new FormControl(''),
    checkoutDate : new FormControl(''),
    dueDate: new FormControl(''),
    returnDate : new FormControl(''),
  });

  onSubmit() {

    if(this.method == "update"){
      try {
        this.update(this.myForm.value).subscribe(() => {
          console.log(`Loan updated`);
          this.router.navigate(['/loan']);

        });
      } catch (e) {
        console.log(e);
      }
    }
    

      if(this.method == "addloan"){
      try {
        this.save(this.myForm.value).subscribe(() => {
          console.log(`Loan added`);
          this.router.navigate(['/loan']);

        });
      } catch (e) {
        console.log(e);
      }
    }
  }

  update(body: any){
    return this.http.put(this.url + `loan/update`, {id : this.id, ...body});
  }
  
  save(body: any) {
    return this.http.post(this.url + `loan/save`, body);
  }
  
}
