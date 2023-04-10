import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-addpublisher',
  templateUrl: './addpublisher.component.html',
  styleUrls: ['./addpublisher.component.css']
})
export class AddpublisherComponent {
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
    phone : new FormControl(''),
    address : new FormControl(''),
    email : new FormControl(''),
  });

  onSubmit() {
console.log("fires")
    if(this.method == "update"){
      
      try {
        this.update(this.myForm.value).subscribe(() => {
          console.log(`Pubs updated`);
          this.router.navigate(['/publisher']);

        });
      } catch (e) {
        console.log(e);
      }
    }
    

      if(this.method == "addpub"){
      try {
        this.save(this.myForm.value).subscribe(() => {
          console.log(`Student added`);
          this.router.navigate(['/publisher']);

        });
      } catch (e) {
        console.log(e);
      }
    }
  }

  update(body: any){
    return this.http.put(this.url + `publisher/update`, {id : this.id, ...body});
  }
  
  save(body: any) {
    return this.http.post(this.url + `publisher/save`, body);
  }
}
