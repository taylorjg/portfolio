import { AppBar, Dialog, IconButton, Toolbar, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
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
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {project.title}
          </Typography>
        </Toolbar>
      </AppBar>
      <StyledContent>{project.longDescriptionMarkdown}</StyledContent>
    </Dialog>
  );
};
