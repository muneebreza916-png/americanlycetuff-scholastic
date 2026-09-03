export interface Leader {
  id: string;
  name: string;
  title: string;
  image: string;
  quote: string;
  bio: string;
  focus: string[];
  signatureNote?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'stem' | 'sports' | 'library' | 'arts' | 'campus';
  categoryLabel: string;
  image: string;
  description: string;
  tag: string;
}

export interface VisionPillar {
  id: string;
  title: string;
  description: string;
  iconName: string;
  stat?: string;
}

export interface InquiryFormData {
  studentName: string;
  gradeApplying: string;
  parentName: string;
  phone: string;
  email: string;
  message: string;
}
