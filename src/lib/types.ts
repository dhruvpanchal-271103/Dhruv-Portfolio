export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint?: string;
  category: string; // Added category field
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export type EducationItem = {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy?: string;
  startDate: string;
  endDate: string;
  description?: string;
  logoUrl?: string; // Optional: if you want to display institution logos
};

export type ExperienceItem = {
  id:string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  logoUrl?: string; // Optional: if you want to display company logos
};

