import { element } from 'protractor';

import { Component , OnInit } from '@angular/core';

import { UploadService } from './shared/upload.service';
import { Upload } from './shared/upload';

import { MovieService } from './shared/movie.service';
import { Movie } from './shared/movie';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  uploads: Observable<Upload[]>;
  movies: Movie[];

  constructor(private upSvc: UploadService, private movService: MovieService) { }

  ngOnInit() {
    this.uploads = this.upSvc.getUploads();
    var x = this.movService.getData();
    x.snapshotChanges().subscribe( item => {
      this.movies = [];
      item.forEach( element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.movies.push(y as Movie);
      })
    })
  }
  onDelete($key){
    this.movService.deleteTodos($key);
  }

  onUpdate(movie: Movie){
    this.movService.currList = movie;

  }

  deleteUpload(upload) {
    this.upSvc.deleteUpload(upload);
  }

  mDel(){
    //this.onDelete();
    //this.deleteUpload();
  }
}
