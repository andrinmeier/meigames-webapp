import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from "@mui/material";

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
                    <Typography>© 2022 MeiGames. All rights reserved.</Typography>
                </Container>
            </Box>
        </footer >
    )
}

export default Footer;