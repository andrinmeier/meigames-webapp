import { Link } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const NavBar = () => {
    return (
        <header>
            <AppBar position="static" style={{ background: "#51279B" }}>
                <Toolbar disableGutters={true} variant="dense" sx={{ paddingLeft: 2 }}>
                    <Link href="/" color="inherit" underline="none"><Typography>MeiGames</Typography></Link>
                </Toolbar>
            </AppBar>
        </header>
    )
}

export default NavBar;