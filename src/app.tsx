import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Global } from "@emotion/react";
import { GlobalStyles } from "./app.styles";
import { ProjectCard } from "./card";
import { StyledCardContainer } from "./app.styles";
import projects from "./data";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Global styles={GlobalStyles} />
      <CssBaseline />
      <StyledCardContainer>
        {projects.map((project) => (
          <ProjectCard key={project.repo} project={project} />
        ))}
      </StyledCardContainer>
    </ThemeProvider>
  );
};
