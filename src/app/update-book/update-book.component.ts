import { Component, OnInit } from '@angular/core';
import { book, lstBooks } from 'src/book';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { BookTypeEnum } from '../enums/book-type.enums';
import { audit } from 'rxjs';
import { BookService } from '../book.service';
@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {
  book : book | undefined;
  lstBookType : string[] = BookTypeEnum.All.map(x => x.name);
  constructor(private router : Router, private formBuilder : FormBuilder, private activatedRoute : ActivatedRoute, private service : BookService) { }
  form = this.formBuilder.group({
    name: ["", Validators.required],
    type: [BookTypeEnum.AnimeBook.code ,Validators.required],
    author: ["", Validators.required],
    locked: ["", Validators.required]
  })
  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const bookId = Number(routeParams.get('id'));
    this.service.getBookById(bookId).subscribe(data => {
        this.book = data;
        this.form.patchValue({
          name: this.book?.name,
          type: this.book?.type,
          author: this.book?.author,
          locked: this.book?.locked
        })
      }
    );
    console.log(bookId);

  }
  onSubmit(){
    if(this.form.valid) {
      let bookId = this.book?.id;
      let newBook : book = {
        id: bookId!,
        name: this.form.value.name,
        type: this.form.value.type,
        author: this.form.value.author,
        locked: this.form.value.locked
      }
      this.service.updateBook(newBook).subscribe(data => {
        console.log('Book updated successfully');
        this.router.navigate(['/books']);
      });
    }
  }
}
