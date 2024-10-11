import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { LuListTodo } from "react-icons/lu";

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ marginBottom: 4 }}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <LuListTodo />
        </IconButton>
        <Typography variant="h6">Todoz</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
