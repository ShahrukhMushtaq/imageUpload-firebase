
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { UploadService } from '../shared/upload.service';
import { MovieService } from '../shared/movie.service';

import { Upload } from '../shared/upload';

@Component({
  selector: 'upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent implements OnInit {


  selectedFiles: FileList | null;
  currentUpload: Upload;

  constructor(private upSvc: UploadService, private movService: MovieService) { }

  ngOnInit() {
  }

  detectFiles($event: Event) {
    this.selectedFiles = ($event.target as HTMLInputElement).files;
}

uploadSingle() {
  const file = this.selectedFiles;
  if (file && file.length === 1) {
    this.currentUpload = new Upload(file.item(0));
    this.upSvc.pushUpload(this.currentUpload);
  } else {
    console.error('No file found!');
  }
}

onSubmit(form : NgForm){
  if(form.value.$key == null)
     { this.movService.insertTodos(form.value);
      this.uploadSingle();}

  else
      this.movService.updateTodos(form.value);    
  this.resetForm(form);            
}

resetForm(form : NgForm){
  if(form != null)
    form.reset();
}


}
