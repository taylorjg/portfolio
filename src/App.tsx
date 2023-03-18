import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Global } from "@emotion/react";
import { GlobalStyles } from "./App.styles";

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
      <div>TODO</div>
    </ThemeProvider>
  );
};
