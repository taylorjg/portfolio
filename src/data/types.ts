export type Project = {
  title: string;
  repo: string;
  repoLink: string;
  website: string;
  technologies: string[];
  shortDescriptionMarkdown: string;
  longDescriptionMarkdown: string;
  screenshots?: [
    {
      path: string;
      caption: string;
    }
  ];
  videos?: [
    {
      path: string;
      caption: string;
    }
  ];
};
