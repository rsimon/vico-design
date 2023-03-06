export interface User {

  id: string;

  fullname?: string;

  avatarUrl?: string;

}

export type Annotation = ImageAnnotation | TextAnnotation;

export interface ImageAnnotation {

  target: ImageAnnotationTarget;

  bodies: AnnotationBody[];

}

export interface TextAnnotation {

  target: TextAnnotationTarget;

  bodies: AnnotationBody[];

}

export type AnnotationTarget = ImageAnnotationTarget | TextAnnotationTarget;

export interface ImageAnnotationTarget {

  // for future use

}

export interface TextAnnotationTarget {
  
  // for future use

}

export interface AnnotationBody {

  creator: User;

  created: Date;

  purpose: Purpose;

  value: any

}

type Purpose = 'commenting' | 'replying' | 'tagging';