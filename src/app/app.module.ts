import { MovieService } from './shared/movie.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm , FormsModule} from "@angular/forms";
import { HttpModule } from "@angular/http";
import { environment} from '../environments/environment';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule , AngularFireDatabase } from "angularfire2/database";


import { AppComponent } from './app.component';
import { UploadFormComponent } from './upload-form/upload-form.component';

import { UploadService } from "./shared/upload.service";

import { Upload } from "./shared/upload";


@NgModule({
  declarations: [
    AppComponent,
    UploadFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [UploadService , MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
