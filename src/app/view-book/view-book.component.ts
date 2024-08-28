import { Component, OnInit } from '@angular/core';
import { book } from 'src/book';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.scss']
})
export class ViewBookComponent implements OnInit {
  book : book | undefined;
  lstBooks : book[] = [];
  constructor(private route : ActivatedRoute, private router : Router, private bookService : BookService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const bookId = Number(routeParams.get('id'));
    this.bookService.getBookById(bookId).subscribe(data => {
      this.book = data;
    });
    this.bookService.getBooks().subscribe(data => {
      this.lstBooks = data;
    });
  }

  ngDelete(id : number) {
    let index = this.lstBooks.findIndex(x => x.id === id);
    this.lstBooks.splice(index, 1);
    this.bookService.deleteBook(id);
    this.router.navigate(['/books']);
  }
}
