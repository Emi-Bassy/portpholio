export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}
 
export const aboutMe: AboutMe = {
  name: "Emi Ichimura",
  title: "Preparing for Graduate School",
  institution: "",
  // Note that links work in the description
  description:
    "I'm a recent-graduate from <a href='https://www.iniad.org/'> Toyo University </a> and majoring computer science. My research focuses on Human-Computer Interaction (HCI) and  Educational Technology (EdTech).",
  email: "ichimura.emi01@gmail.com",
  imageUrl: '/profile_20250401.jpg',
  // "https://images.unsplash.com/photo-1581481615985-ba4775734a9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // googleScholarUrl: "https://scholar.google.com/citations?user=bWtMl_MAAAAJ",
  githubUsername: "Emi-Bassy",
  linkedinUsername: "emi-ichimura",
  // twitterUsername: "janesmith",
  blogUrl: "https://emi-75.hatenablog.com/",
  // cvUrl: "https://",
  // institutionUrl: "https://www.stanford.edu",
  // altName: "",
  // secretDescription: "I like dogs.",
};
