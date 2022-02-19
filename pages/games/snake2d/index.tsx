import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react';
import { Game } from 'meigames-snake2d';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image'
import snakeTitleImage from '../../../public/snake2d_title.png';

let game: Game;

const Snake2DPage: NextPage = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState("Idle");

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current as any;
    const context = canvas.getContext("webgl2");
    game = new Game(context, canvas);
    game.registerOnScoreChanged((newScore: number) => {
      setScore(_ => newScore);
    });
    game.registerOnGameDone(() => {
      setStatus("Game over");
    })
    console.log({ game })
    game.start();
    setStatus("Running");
  }, [canvasRef]);


  return (
    <div>
      <Head>
        <title>Snake2D | MeiGames</title>
        <link
          rel="canonical"
          href="https://mei-games.com/games/snake2d"
          key="canonical"
        />
        <meta
          name="description"
          content="Play Snake 2D in your web browser for free."
          key="desc"
        />
      </Head>
      <Image
        src={snakeTitleImage}
        alt="Snake 2D" />
      <Card sx={{ display: 'flex', marginTop: 5 }}>
        <Box sx={{ padding: 3 }}>
          <canvas ref={canvasRef} id="snake2d-canvas" className="game-canvas" style={{ border: "4px solid #51279B", borderRadius: "0.5em" }} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              Score
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {score}
            </Typography>
            <Typography component="div" variant="h5">
              Status
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {status}
            </Typography>
            <Typography component="div" variant="h5">
              How to play (desktop)
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Use <b>A</b> to rotate left and <b>D</b> to rotate right.
              <br />
              Try to eat as much food as you can without hitting yourself or the wall.
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </div>
  )
}

export default Snake2DPage;
