import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:8080/'

  data:any = {}

  ngOnInit() {
    this.getStudents(this.url);
  }


  onClickDelete(id: string): void { 
    console.log(id)
    try {
      this.deleteStudent(id).subscribe(() => {
        console.log(`Student with ID ${id} deleted`);
        this.getStudents(this.url);
      });
    } catch (e) {
      console.log(e);
    }
  }
  


  deleteStudent(id: string) {
    return this.http.delete(this.url+`student/delete/${id}`);
  }

  private getStudents(url: string):void {
    this.http.get<any>(url+'student/getall').subscribe(data => {
      this.data = data; 

      console.log(this.data)    
      
    });


}
}
