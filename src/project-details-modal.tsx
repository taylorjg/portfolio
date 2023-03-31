import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ReactMarkdown from "react-markdown";
import { Project } from "./data";
import { StyledContent, StyledTitle } from "./project-details-modal.styles";

export type ProjectDetailsModalProps = {
  project: Project;
  onClose: () => void;
};

export const ProjectDetailsModal: React.FunctionComponent<
  ProjectDetailsModalProps
> = ({ project, onClose }: ProjectDetailsModalProps) => {
  const theme = useTheme();
  const mediaQuery = theme.breakpoints.down("md");
  const isSmallScreen = useMediaQuery(mediaQuery);

  console.log({ mediaQuery, isSmallScreen });

  return (
    <Dialog
      fullScreen={isSmallScreen}
      maxWidth="md"
      fullWidth={true}
      open={true}
      onClose={onClose}
    >
      <DialogTitle>
        <StyledTitle>
          <Typography variant="h5" component="div">
            {project.title}
          </Typography>
          <IconButton onClick={onClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </StyledTitle>
      </DialogTitle>
      <DialogContent dividers>
        <StyledContent>
          <Typography variant="h5">Description</Typography>
          <ReactMarkdown>{project.longDescriptionMarkdown}</ReactMarkdown>
          <Typography variant="h5">Technologies</Typography>
          <ul>
            {project.technologies.map((technology, index) => (
              <li key={index}>{technology}</li>
            ))}
          </ul>
          <Typography variant="h5">GitHub Repo</Typography>
          <p>
            <a href={project.repoLink}>{project.repoLink}</a>
          </p>
          <Typography variant="h5">Deployed Website</Typography>
          <p>
            <a href={project.website}>{project.website}</a>
          </p>
        </StyledContent>
      </DialogContent>
    </Dialog>
  );
};
