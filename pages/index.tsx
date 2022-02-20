import type { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image'
import snakeTitleImage from '../public/snake2d_title.png';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
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
      <ImageList
        variant="quilted"
        cols={4}
      >
        <ImageListItem key={2} cols={1} rows={2} sx={{ border: "5px solid #0E5814", borderRadius: "5px", padding: 3, background: "#E1E1E1" }}>
          <Grid container>
            <Grid item xs={12}>
              <MeiLogo sx={{ fill: "#207227", width: "100%", height: "100%" }} />
            </Grid>
            <Grid item xs={12}>
              <Typography color="secondary.dark" variant="h2" sx={{ fontWeight: "bold" }}>MeiGames</Typography>
            </Grid>
          </Grid>
        </ImageListItem>
        <ImageListItem key={1} cols={1} rows={1} sx={{ border: "5px solid #0E5814", borderRadius: "5px", padding: 3, background: "#E1E1E1" }}>
          <Link href="/games/snake2d">
            <Image
              src={snakeTitleImage}
              alt="Snake 2D"
              placeholder="blur" />
          </Link>
        </ImageListItem>
        <ImageListItem key={2} cols={1} rows={1} sx={{ border: "5px solid #0E5814", borderRadius: "5px", padding: 3, background: "#E1E1E1" }}>
          <Box>
            <Typography variant="body1">Developed by <Link color="inherit" underline="none" href="mailto:play@mei-games.com">Andrin Meier</Link></Typography>
            <Typography variant="body1">Drawings by <Link color="inherit" underline="none" href="mailto:artist@mei-games.com">麻婷娜</Link></Typography>
            <IconButton sx={{ paddingLeft: 0 }} color="inherit" href="https://github.com/andrinmeier/meigames-webapp" target="_blank" rel="noopener noreferrer">
              <GitHubIcon fontSize="large" />
            </IconButton>
          </Box>
        </ImageListItem>
      </ImageList>
    </div>
  )
}

export default Home
