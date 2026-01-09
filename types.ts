
export enum AppView {
  AUTH = 'AUTH',
  DASHBOARD = 'DASHBOARD',
  QUIZ = 'QUIZ',
  EXPLORER = 'EXPLORER',
  PROFILE = 'PROFILE'
}

export interface UserData {
  name: string;
  age: number;
  degree: string;
  dob: string;
  gradYear: string;
  profilePic?: string;
  score?: QuizScore;
}

export interface QuizScore {
  technical: number;
  creative: number;
  business: number;
  service: number;
}

export interface CareerSector {
  id: string;
  title: string;
  category: 'Technology' | 'Marketing' | 'Creative' | 'Finance' | 'Management' | 'Academic' | 'Healthcare' | 'Engineering' | 'Services';
  description: string;
  icon: string;
  salary: string;
  roadmap: string[];
  requirements: string[];
}
