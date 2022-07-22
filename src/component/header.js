import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const Header = ({ headerLeft, title, headerRight }) => {
  return (
    <>
      <Grid>
        <Typography variant="h6 " color="primary" align="center"></Typography>

        <Button>{headerLeft}</Button>
        <Typography variant="h6 " color="primary" align="center">
          {title}
        </Typography>
        <Typography variant="h6 " color="primary" align="center">
          {headerRight}
        </Typography>
      </Grid>
    </>
  );
};

export default Header;
