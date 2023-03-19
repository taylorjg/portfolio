import { AppBar, Dialog, IconButton, Toolbar, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ReactMarkdown from "react-markdown";
import { Project } from "./data";
import { StyledContent } from "./project-details-modal.styles";

export type ProjectDetailsModalProps = {
  project: Project;
  onClose: () => void;
};

export const ProjectDetailsModal: React.FunctionComponent<
  ProjectDetailsModalProps
> = ({ project, onClose }: ProjectDetailsModalProps) => {
  return (
    <Dialog fullScreen open={true} onClose={onClose}>
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2 }} variant="h4">
            {project.title}
          </Typography>
        </Toolbar>
      </AppBar>
      <StyledContent>
        <Typography variant="h5">Description</Typography>
        <ReactMarkdown>{project.longDescriptionMarkdown}</ReactMarkdown>
        <Typography variant="h5">Technologies</Typography>
        <ul>
          {project.technologies.map((technology, index) => (
            <li key={index}>{technology}</li>
          ))}
        </ul>
      </StyledContent>
    </Dialog>
  );
};
