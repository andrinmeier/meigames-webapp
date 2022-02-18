import { Button, TextField } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'

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
    </div>
  )
}

export default Home
