import { Typography, Box, Stack, AppBar, Toolbar } from "@mui/material";

export const Header = ({ headerLeft, title, headerRight }) => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Stack
            sx={{ flexGrow: 1 }}
            direction="row"
            justifyContent="space-between"
            alignItems="stretch"
            spacing={5}
          >
            {headerLeft}
            {title}
            {headerRight}
          </Stack>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
