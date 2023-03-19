import { Project } from "./data";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

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
      <CardActionArea onClick={() => onLearnMore(project)}>
        <CardContent>
          <CardMedia
            component="img"
            sx={{ height: "12rem", mb: 1, objectFit: "fill" }}
            image={project.cardImage.path}
            title={project.cardImage.caption}
          />
          <Typography gutterBottom variant="h6">
            {project.title}
          </Typography>
          <Typography gutterBottom variant="body2">
            {project.shortDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
