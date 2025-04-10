export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Feb 2024 - Jun 2024",
    title: "Teaching Assistant",
    company: "Tably",
    description:
      "Assisted elementary and middle school students in learning programming through after-school.",
    companyUrl: "https://tably.rocks/",
  },
  {
    date: "Sep 2021 - Mar 2024",
    title: "Education Mentor",
    company: "CA Tech Kids",
    description:
      "Teached Swift, QUREO, Scratch to elementary and junior high school students.",
    companyUrl: "https://techkidsschool.jp/",
  },
  {
    date: "Aug 2022 - Sep 2023",
    title: "Project Manager Intern",
    company: "Waffle.org (NPO)",
    description:
      "Managed the program for minorities in the STEM field that have been selected for the Google.org impact challenge for Women and Girls 2021.",
    companyUrl: "https://waffle-waffle.org/",
  },
];
