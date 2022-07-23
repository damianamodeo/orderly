import { Typography, Stack, AppBar, Toolbar } from "@mui/material";

export const Header = ({ headerLeft, title, headerRight }) => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography>{headerLeft}</Typography>
            <Typography>{title}</Typography>
            <Typography>{headerRight}</Typography>
          </Stack>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
