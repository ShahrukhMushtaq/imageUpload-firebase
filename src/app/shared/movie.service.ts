import { Injectable } from '@angular/core';
import { Movie } from "./movie";
import { AngularFireDatabase , AngularFireList } from "angularfire2/database";

@Injectable()
export class MovieService {

  todolist: AngularFireList<any>;
  currList : Movie = new Movie(); 

  constructor(private firebase: AngularFireDatabase) { }

  getData(){
    this.todolist = this.firebase.list('uploads');
    return this.todolist;
  }

  insertTodos(movie: Movie){

    this.todolist.push({
      naam: movie.naam,
      desc: movie.desc,
    });
  }

  updateTodos(movie: Movie){

    this.todolist.update(movie.$key,{
      naam: movie.naam,
      desc: movie.desc,
    });
  }

  deleteTodos($key: string){
    this.todolist.remove($key);
  }

}
