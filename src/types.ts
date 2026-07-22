export interface Advisor {
  id: string;
  name: string;
  title: string;
  subtitles: string[];
  description: string;
  photoUrl: string;
}

export interface StudentLeader {
  id: string;
  role: string;
  name: string;
  email?: string;
  description: string;
  photoUrl: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  authors: string;
  affiliations?: string[];
  authorEmails?: string[];
  date: string;
  category: string;
  abstract: string;
  pdfUrl?: string;
  openAccess?: boolean;
}

export interface ContactMessage {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export type ActiveTab = 'home' | 'research' | 'about' | 'contact';
