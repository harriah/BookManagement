import { Component, OnInit } from '@angular/core';
import { book, lstBooks } from 'src/book';
import { BookService } from '../book.service';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  lstBooks : book[] = [];
  constructor(private service : BookService) { }

  ngOnInit(): void {
    this.service.getBooks().subscribe(data => {
      this.lstBooks = data;
    });
  }
  ngDelete(id : number) {
    this.service.deleteBook(id).subscribe(
      () => {
        console.log('Book deleted successfully');
        this.reload();
        // Refresh the book list or update the UI as needed
      },
      (error) => {
        console.error('Error deleting book:', error);
      }
    );
  }

  reload() : void {
    this.service.getBooks().subscribe(data => {
      this.lstBooks = data;
    });
  }
}
