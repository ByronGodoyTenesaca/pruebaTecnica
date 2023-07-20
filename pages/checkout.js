import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

export default function CheckOut() {
  return (
    <>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: "red" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          >
          </IconButton>
          <Typography variant="h6">
            Productos del carrito
          </Typography>
        </Toolbar>
      </AppBar>

      

    </>
  )
}