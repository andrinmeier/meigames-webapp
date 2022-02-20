import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton, Link } from "@mui/material";

const Footer = () => {
    return (
        <footer>
            <Box position="static" bgcolor="primary.main" color="white" sx={{
                minHeight: 100,
                marginTop: 10,
                paddingTop: 3,
                paddingBottom: 3
            }}>
                <Container>
                    <Typography variant="body2">© 2022 MeiGames.</Typography>
                    <br />
                    <Typography variant="body2">Developed by <Link color="inherit" underline="none" href="mailto:play@mei-games.com">Andrin Meier</Link></Typography>
                    <Typography variant="body2">Drawings by <Link color="inherit" underline="none" href="mailto:artist@mei-games.com">麻婷娜</Link></Typography>
                    <IconButton sx={{ paddingLeft: 0 }} color="inherit" href="https://github.com/andrinmeier/meigames-webapp" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon fontSize="large" />
                    </IconButton>
                </Container>
            </Box >
        </footer >
    )
}

export default Footer;