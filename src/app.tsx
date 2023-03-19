import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Global } from "@emotion/react";
import { GlobalStyles } from "./app.styles";
import { Card } from "./card";
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
      <div>
        <ul>
          {projects.map((project) => (
            <Card key={project.repo} project={project} />
          ))}
        </ul>
      </div>
    </ThemeProvider>
  );
};
