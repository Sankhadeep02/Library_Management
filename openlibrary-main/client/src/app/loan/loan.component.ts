import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:8080/'

  data:any = {}

  count:any = "";

  ngOnInit() {
    this.getLoan(this.url);
    this.getCount(this.url);

  }

  onClickDelete(id: string): void { 
    console.log(id)
    try {
      this.deleteLoan(id).subscribe(() => {
        console.log(`loan with ID ${id} deleted`);
        this.getLoan(this.url);
      });
    } catch (e) {
      console.log(e);
    }
  }
  


  deleteLoan(id: string) {
    return this.http.delete(this.url+`loan/delete/${id}`);
  }

  private getLoan(url: string):void {
    this.http.get<any>(url+'loan/getall').subscribe(data => {
      this.data = data; 

      console.log(this.data)    
      
    });
  }


  //WORKING ON IT
  private getCount(url: string):void{
    this.http.get<any>(url+'author/findTotal').subscribe(data =>{this.count = data})
  }

  
  
}
