import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})


export class AddbookComponent implements OnInit  {
 
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
    author : new FormControl(''),
    isbn : new FormControl(''),
    publication : new FormControl('')
  });

  onSubmit() {

    if(this.method == "update"){
      try {
        this.update(this.myForm.value).subscribe(() => {
          console.log(`Book updated`);
          this.router.navigate(['/books']);

        });
      } catch (e) {
        console.log(e);
      }
    }
    

      if(this.method == "addbook"){
      try {
        this.save(this.myForm.value).subscribe(() => {
          console.log(`Book added`);
          this.router.navigate(['/books']);

        });
      } catch (e) {
        console.log(e);
      }
    }
  }

  update(body: any){
    return this.http.put(this.url + `books/update`, {id : this.id, ...body});
  }
  
  save(body: any) {
    return this.http.post(this.url + `books/save`, body);
  }
  
  



}

