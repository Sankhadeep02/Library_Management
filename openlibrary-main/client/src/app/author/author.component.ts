import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:8080/'

  data:any = {}

  count:any = "";

  ngOnInit() {
    this.getAuthor(this.url);
    this.getCount(this.url);

  }

  onClickDelete(id: string): void { 
    console.log(id)
    try {
      this.deleteAuthor(id).subscribe(() => {
        console.log(`Author with ID ${id} deleted`);
        this.getAuthor(this.url);
      });
    } catch (e) {
      console.log(e);
    }
  }
  


  deleteAuthor(id: string) {
    return this.http.delete(this.url+`author/delete/${id}`);
  }

  private getAuthor(url: string):void {
    this.http.get<any>(url+'author/getall').subscribe(data => {
      this.data = data; 

      console.log(this.data)    
      
    });
  }


  //WORKING ON IT
  private getCount(url: string):void{
    this.http.get<any>(url+'author/findTotal').subscribe(data =>{this.count = data})
  }

  
  

}

