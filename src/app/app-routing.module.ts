import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { ViewBookComponent } from './view-book/view-book.component';

const routes: Routes = [
    {path: "books", component: BookListComponent},
    {path: "books/create", component: CreateBookComponent},
    {path: "books/update/:id", component: UpdateBookComponent},
    {path: "books/view/:id", component: ViewBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
