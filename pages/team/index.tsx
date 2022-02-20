import type { NextPage } from 'next'
import Head from 'next/head'
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

const ImpressumPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Snake2D | MeiGames</title>
        <link
          rel="canonical"
          href="https://mei-games.com/impressum"
          key="canonical"
        />
        <meta
          name="description"
          content="The team behind mei-games.com"
          key="desc"
        />
      </Head>
      <Typography variant="h1">
        Team
      </Typography>      
      <Typography variant="h2">
        Developer
      </Typography>      
      <Typography variant="body2">
        Andrin Meier 
        <br/>
        <Link href="mailto:play@mei-games.com">play@mei-games.com</Link>
      </Typography>
    </div>
  )
}

export default ImpressumPage;
