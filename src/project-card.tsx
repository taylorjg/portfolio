import { Project } from "./data";
import { Button, Card, CardActions, CardContent } from "@mui/material";

type CardProps = {
  project: Project;
  onLearnMore: (project: Project) => void;
};

export const ProjectCard: React.FunctionComponent<CardProps> = ({
  project,
  onLearnMore,
}: CardProps) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <div>{project.title}</div>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onLearnMore(project)}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
