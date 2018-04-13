export class Upload {
  $key: string;
  file: File;
  name: string;
  //naam: string;
  //desc: string;
  url: string;
  progress: number;
  createdAt: Date = new Date();
  constructor(file: File) {
    this.file = file;
  }
}
