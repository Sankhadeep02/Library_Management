import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:8080/'

  data:any = {}

  count:any = "";

  ngOnInit() {
    this.getAdmin(this.url);
    this.getCount(this.url);

  }

  onClickDelete(id: string): void { 
    console.log(id)
    try {
      this.deleteAdmin(id).subscribe(() => {
        console.log(`Admin with ID ${id} deleted`);
        this.getAdmin(this.url);
      });
    } catch (e) {
      console.log(e);
    }
  }
  


  deleteAdmin(id: string) {
    return this.http.delete(this.url+`admin/delete/${id}`);
  }

  private getAdmin(url: string):void {
    this.http.get<any>(url+'admin/getall').subscribe(data => {
      this.data = data; 

      console.log(this.data)    
      
    });
  }


  //WORKING ON IT
  private getCount(url: string):void{
    this.http.get<any>(url+'admin/findTotal').subscribe(data =>{this.count = data})
  }

  
  
}
