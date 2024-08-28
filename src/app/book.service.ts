import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { catchError, Observable, throwError } from 'rxjs';
import { book } from 'src/book';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiServerUrl = environment.apiUrl;
  constructor(private httpClient : HttpClient) { }
  getBooks() : Observable<book[]> {
    return this.httpClient.get<book[]>(`${this.apiServerUrl}/Books`);
  }
  getBookById(id : number) : Observable<book> {
    return this.httpClient.get<book>(`${this.apiServerUrl}/Books/${id}`);
  }
  addBook(book : book) : Observable<book> {
    return this.httpClient.post<book>(`${this.apiServerUrl}/Books`, book);
  }
  updateBook(book : book) : Observable<void> {
    return this.httpClient.put<void>(`${this.apiServerUrl}/Books/${book.id}`, book);
  }
  deleteBook(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiServerUrl}/Books/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }
  private handleError(error: HttpErrorResponse): Observable<never> {
    // Log the error to the console or send it to a logging infrastructure
    console.error('An error occurred:', error.message);
    // Return an observable with a user-facing error message
    return throwError('Something went wrong; please try again later.');
  }
}
