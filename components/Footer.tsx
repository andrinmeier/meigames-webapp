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
                    <Typography variant="body2">© 2022 MeiGames. All rights reserved.</Typography>
                    <br/>
                    <Typography variant="body2"><Link color="inherit" underline="none" href="mailto:play@mei-games.com">Developed by Andrin Meier</Link></Typography>
                    <Typography variant="body2"><Link color="inherit" underline="none" href="mailto:designer@mei-games.com">Design by 麻婷娜</Link></Typography>
                </Container>
            </Box >
        </footer >
    )
}

export default Footer;