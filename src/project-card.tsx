import { Project } from "./data";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { AspectRatio } from "react-aspect-ratio";

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
          <AspectRatio ratio="16/9">
            <CardMedia
              image={project.cardImage.path}
              title={project.cardImage.caption}
            />
          </AspectRatio>
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
