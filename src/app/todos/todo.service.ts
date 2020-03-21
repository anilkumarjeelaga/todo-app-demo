import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITodo } from '../interfaces/todo';
import { environment } from '../../environments/environment';


@Injectable()
export class TodoService {
apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }
  // getTodos(){ observable<ITodo[]>
  //   return this.http.get(`${this.apiUrl}/todos`)
  // }
  getTodos(): Observable <ITodo[]>{
    return this.http.get(`${this.apiUrl}/todos`).pipe(
      map((data) =>{
      return data as ITodo[];
      })
    );
  }

}
