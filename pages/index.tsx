import type { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image'
import snakeTitleImage from '../public/snake2d_title.png';
import ImageListItem, { imageListItemClasses } from '@mui/material/ImageListItem';
import { Link, Grid, Box } from '@mui/material';
import MeiLogo from '../components/MeiLogo';
import Typography from "@mui/material/Typography";
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from "@mui/material";

const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>MeiGames</title>
        <link
          rel="canonical"
          href="https://mei-games.com"
          key="canonical"
        />
        <meta
          name="description"
          content="MeiGames is a website for entertaining games written for the web."
          key="desc"
        />
      </Head>
      <Grid container spacing={0} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={3} sx={{ border: "2px solid #0E5814", borderRadius: "5px", padding: 3, margin: 3, background: "#E1E1E1" }}>
          <MeiLogo sx={{ fill: "#207227", width: "100%", height: "100%" }} />
          <br />
          <Typography color="secondary.dark" variant="h4" sx={{ textAlign: "center", fontWeight: "bold" }}>MeiGames</Typography>
        </Grid>
        <Grid item xs={12} sm={5} sx={{ border: "2px solid #0E5814", borderRadius: "5px", padding: 3, margin: 3, background: "#E1E1E1" }}>
          <Link href="/games/snake2d">
            <Image
              src={snakeTitleImage}
              alt="Snake 2D"
              placeholder="blur" />
          </Link>
        </Grid>
        <Grid item xs={12} sm={4} sx={{ border: "2px solid #0E5814", borderRadius: "5px", padding: 3, margin: 3, background: "#E1E1E1" }}>
          <Box>
            <Typography color="primary" variant="body1">Developer <Link color="inherit" underline="none" href="mailto:play@mei-games.com"><b>Andrin Meier</b></Link></Typography>
            <Typography color="primary" variant="body1">Artist <Link color="inherit" underline="none" href="mailto:artist@mei-games.com"><b>麻婷娜</b></Link></Typography>
            <Box sx={{ justifyContent: "center", display: "flex", marginTop: 2 }}>
              <IconButton sx={{ paddingLeft: 0 }} color="inherit" href="https://github.com/andrinmeier/meigames-webapp" target="_blank" rel="noopener noreferrer">
                <GitHubIcon fontSize="small" sx={{ width: 48, height: 48 }} />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div >
  )
}

export default Home
