export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2020-2025",
    institution: "Toyo University",
    degree: "BSc. in Information Networking for Innovation and Design (Computer Science)",
  },
];
