import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react';
import { Game } from 'meigames-snake2d';
import Image from 'next/image';
import titleImage from '../../../public/snake2d_title.png';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const Snake2DPage: NextPage = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState("Running");

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current as any;
    const context = canvas.getContext("webgl2");
    const game: Game = new Game(context, canvas);
    game.init();
    game.registerOnScoreChanged((newScore: number) => {
      setScore(score => score + 1);
    });
    game.registerOnGameDone(() => {
      setStatus("Game over");
    })
    game.start();
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
        src={titleImage}
        alt="Snake 2D" />
      <Card sx={{ display: 'flex', marginTop: 5 }}>
        <Box sx={{ padding: 3, width: "512px", height: "512px" }}>
          <canvas ref={canvasRef} id="snake2d-canvas" style={{ border: "4px solid #51279B", borderRadius: "0.5em", width: "100%", height: "100%" }} />
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
              Use <b>A</b> to rotate left and <b>D</b> to rotate left.
              <br/>
              Try to eat as much food as you can without hitting yourself or the wall.
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </div>
  )
}

export default Snake2DPage;
