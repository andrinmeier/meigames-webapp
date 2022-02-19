import { Button, CardActions, TextField } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from 'next/link';

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
      <h1>Welcome to MeiGames!</h1>
      <Card sx={{ maxWidth: 345, padding: 3 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image="/snake2d_title.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Snake 2D
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Play the classic snake game in 2D, reimagined and revived with modern technologies!
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link href="/games/snake2d">
            <a>Play now!</a>
          </Link>
        </CardActions>
      </Card>
    </div>
  )
}

export default Home
