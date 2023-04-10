import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { PublisherComponent } from './publisher/publisher.component';
import { LoanComponent } from './loan/loan.component';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';
import { AddbookComponent } from './book/addbook/addbook.component';
import { AddadminComponent } from './admin/addadmin/addadmin.component';
import { AddpublisherComponent } from './publisher/addpublisher/addpublisher.component';
import { AddstudentComponent } from './student/addstudent/addstudent.component';
import { BodyComponent } from './body/body.component';
import { AuthorComponent } from './author/author.component';
import { AddauthorComponent } from './author/addauthor/addauthor.component';
import { AddloanComponent } from './loan/addloan/addloan.component';

const routes: Routes = [
  { path : '', component: BodyComponent},

   { path : 'books', component: BookComponent},
   { path : 'books/:method', component: AddbookComponent},
   { path : 'books/:method/:id', component: AddbookComponent},

   { path : 'admin', component: AdminComponent},
   { path : 'admin/:method', component: AddadminComponent}, 
   { path : 'admin/:method/:id', component: AddadminComponent},

   { path : 'author', component: AuthorComponent},
   { path : 'author/:method', component: AddauthorComponent}, 
   { path : 'author/:method/:id', component: AddauthorComponent},

   { path : 'publisher', component: PublisherComponent},
   { path : 'publisher/:method', component: AddpublisherComponent},
   { path : 'publisher/:method/:id', component: AddpublisherComponent},

   { path : 'loan', component: LoanComponent},
   { path : 'loan/:method', component: AddloanComponent},
   { path : 'loan/:method/:id', component: AddloanComponent},

   { path : 'student', component: StudentComponent},
   { path : 'student/:method', component: AddstudentComponent},
   { path : 'student/:method/:id', component: AddstudentComponent},


]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
