import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  constructor(private http: HttpClient) {}

  url = 'http://localhost:8080/'

  data:any = {}

  ngOnInit() {
    this.getBooks(this.url);
  }





  onClickDelete(id: string): void { 
    console.log(id)
    try {
      this.deleteBook(id).subscribe(() => {
        console.log(`Book with ID ${id} deleted`);
        this.getBooks(this.url);
      });
    } catch (e) {
      console.log(e);
    }
  }
  


  deleteBook(id: string) {
    return this.http.delete(this.url+`books/delete/${id}`);
  }

  private getBooks(url: string):void {
    this.http.get<any>(url+'books/getAll').subscribe(data => {
      this.data = data; //stores all the pokemons in res and other data as well

      console.log(this.data)    
      
    });


}

}
