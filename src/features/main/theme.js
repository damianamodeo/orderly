import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#4a6da7", light: "#7b9acc", dark: "#3b5278" },
    secondary: { main: "#5c3c88", light: "#7f5fad", dark: "#391c61" },
    background: { default: "#e6e6e6" },
  },
});

export default theme;
