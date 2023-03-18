import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Global } from "@emotion/react";
import { GlobalStyles } from "./app.styles";
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
            <li key={project.repo}>{project.title}</li>
          ))}
        </ul>
      </div>
    </ThemeProvider>
  );
};
