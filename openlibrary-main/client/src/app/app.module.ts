import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BodyComponent } from './body/body.component';
import { BookComponent } from './book/book.component';
import { LoanComponent } from './loan/loan.component';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';
import { PublisherComponent } from './publisher/publisher.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { AddbookComponent } from './book/addbook/addbook.component';
import { AddpublisherComponent } from './publisher/addpublisher/addpublisher.component';
import { AddadminComponent } from './admin/addadmin/addadmin.component';
import { AddstudentComponent } from './student/addstudent/addstudent.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorComponent } from './author/author.component';
import { AddauthorComponent } from './author/addauthor/addauthor.component';
import { AddloanComponent } from './loan/addloan/addloan.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    BodyComponent,
    BookComponent,
    LoanComponent,
    StudentComponent,
    AdminComponent,
    PublisherComponent,
    AddbookComponent,
    AddpublisherComponent,
    AddadminComponent,
    AddstudentComponent,
    AuthorComponent,
    AddauthorComponent,
    AddloanComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
