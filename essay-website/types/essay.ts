export interface Reference {
  id: string;
  author: string;
  title: string;
  publisher?: string;
  journal?: string;
  volume?: string;
  pages?: string;
  year: string;
  url?: string;
  doi?: string;
}

export interface AudioClip {
  id: string;
  src: string;
  label: string;
  description?: string;
}

export interface VideoClip {
  id: string;
  url: string; // supports YouTube/Vimeo/etc.
  label?: string;
  description?: string;
}

export interface Paragraph {
  id: string;
  content: string;
  references?: string[]; // IDs of references cited
  audioClips?: AudioClip[];
  videoClips?: VideoClip[];
  figures?: Figure[];
}

export interface Figure {
  id: string;
  src: string; // path under /public or external URL
  caption?: string;
}

export interface Section {
  id: string;
  title: string;
  paragraphs: Paragraph[];
}

export interface SubSection extends Section {
  parentId: string;
}

export interface EssayData {
  title: string;
  author: string;
  sections: (Section | SubSection)[];
  references: Reference[];
}
