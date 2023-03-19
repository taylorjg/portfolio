import { Project } from "./data";

type CardProps = {
  project: Project;
};

export const Card: React.FunctionComponent<CardProps> = ({
  project,
}: CardProps) => {
  return <li>{project.title}</li>;
};
