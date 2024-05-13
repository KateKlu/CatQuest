export interface CatRandomPhoto {
   url: string;
}

export interface CatRandomPhotoRes {
   [index: number]: CatRandomPhoto;
}

export interface CatRandomFact {
   fact: string;
}
