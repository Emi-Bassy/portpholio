export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2025",
    conference: "ICCT-Pacific",
    title: "ColloSpeak: A GenAI-Powered System for Learning English Collocation",
    authors: "Emi Ichimura, M. Fahim Ferdous Khan, Ken Sakamura",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Developed an AI-based collocation learning application to improve English speaking skills",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2025",
    conference: "情報処理学会シンポジウム インタラクション",
    title: "プログラミング学習における意欲向上のための生成AI利用の検討",
    authors: "市村衣未, 神場知成",
    tldr: "Developed a learning system in which a generative AI provides two types of feedback with different purposes when learning programming to motivate learners to study.",
  },
  {
    year: "2024",
    conference: "IIAI Letters on Institutional Research",
    title: "Programming Education Methods for Elementary School Students and Their Relation with Personal Preferences",
    authors: "Emi Ichimura, Tomonari Kamba",
    paperUrl: "https://iaiai.org/letters/index.php/lir/article/view/300",
  },
  {
    year: "2024",
    conference: "情報処理学会シンポジウム インタラクション",
    title: "小学生の嗜好や属性と適したプログラミング教育方法の調査・分析",
    authors: "市村衣未, 神場知成",
    paperUrl: "https://www.interaction-ipsj.org/proceedings/2024/data/pdf/1P-73.pdf",
  },
];
