import { Component, OnInit } from '@angular/core';
import { book, lstBooks } from 'src/book';
import { BookTypeEnum } from 'src/app/enums/book-type.enums';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss'],
})
export class CreateBookComponent implements OnInit {
  lstBooks : book[] = lstBooks;
  form = this.formBuilder.group({
    name: ['', Validators.required],
    type: [BookTypeEnum.ProgrammingBook.code, Validators.required],
    author: ['', Validators.required],
    locked: [false, Validators.required]
  });
  lstBookType : string[] = BookTypeEnum.All.map(x => x.name);
  constructor(private formBuilder : FormBuilder, private router : Router, private bookService : BookService) { }

  ngOnInit(): void {

  }

  ngSave() {
    if(this.form.valid) {
      let newBook : book = {
        id: 0,
        name: this.form.value.name,
        type: this.form.value.type,
        author: this.form.value.author,
        locked: this.form.value.locked
    }
    this.bookService.addBook(newBook).subscribe(data => {
      this.router.navigate(['/books']);
    });


  }
}

}
