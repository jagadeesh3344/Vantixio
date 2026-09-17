export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string[];
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  workflow: {
    label: string;
    subLabel: string;
  }[];
}

export interface ContactFormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  buildType: string;
  description: string;
  meetingDate: string;
  meetingTime: string;
  budgetRange: string;
}
