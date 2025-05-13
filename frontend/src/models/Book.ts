// src/models/Book.ts

export interface IBook {
  author: string;
  title: string;
  description: string;
  genre: number;
  type: number;
  targetAudience: number;
  language: number;
  publicationFile?: File;
  sampleFile?: File;
  coverFile?: File;
}

export class Book implements IBook {
  author: string;
  title: string;
  description: string;
  genre: number;
  type: number;
  targetAudience: number;
  language: number;
  publicationFile?: File;
  sampleFile?: File;
  coverFile?: File;

  constructor(data: IBook) {
    this.author           = data.author;
    this.title            = data.title;
    this.description      = data.description;
    this.genre            = data.genre;
    this.type             = data.type;
    this.targetAudience   = data.targetAudience;
    this.language         = data.language;
    this.publicationFile  = data.publicationFile;
    this.sampleFile       = data.sampleFile;
    this.coverFile        = data.coverFile;
  }

  /** 
   * Prepare the JSON payload for your API (omitting File objects, 
   * or if you need to upload via multipart/form-data you can override this).
   */
  toJSON() {
    return {
      author:         this.author,
      title:          this.title,
      description:    this.description,
      genre:          this.genre,
      type:           this.type,
      targetAudience: this.targetAudience,
      language:       this.language,
      // files usually uploaded separately via FormData
    };
  }
}
