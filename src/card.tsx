import { Project } from "./data";
import { Button, Card, CardActions, CardContent } from "@mui/material";

type CardProps = {
  project: Project;
};

export const ProjectCard: React.FunctionComponent<CardProps> = ({
  project,
}: CardProps) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <div>{project.title}</div>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
