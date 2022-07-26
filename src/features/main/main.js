import { ThemeProvider, CssBaseline } from "@mui/material";
import Navbar from "../navbar/navbar";
import { Publishers } from "../publishers/pages/publishers";
import theme from "./theme";

function Main() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Navbar></Navbar>
        <Publishers></Publishers>
      </ThemeProvider>
    </>
  );
}

export default Main;
