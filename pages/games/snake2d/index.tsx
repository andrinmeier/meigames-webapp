import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef, useState, useCallback } from 'react';
import { Game } from 'meigames-snake2d';
import Typography from '@mui/material/Typography';
import Image from 'next/image'
import snakeTitleImage from '../../../public/snake2d_title.png';
import { Grid, IconButton, Paper } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';

const Snake2DPage: NextPage = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState("Idle");
  const fullScreenHandle = useFullScreenHandle();

  const startGame = useCallback(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current as any;
    const context = canvas.getContext("webgl2");
    const game = new Game(context, canvas);
    game.registerOnScoreChanged((newScore: number) => {
      setScore(_ => newScore);
    });
    game.registerOnGameDone(() => {
      setStatus("Game over");
    })
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
      <Paper sx={{ padding: 5, marginTop: 5 }}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Image
              src={snakeTitleImage}
              alt="Snake 2D" />
          </Grid>
          <Grid item xs={12}>
            <FullScreen handle={fullScreenHandle}>
              <canvas ref={canvasRef} id="snake2d-canvas" style={{ border: "4px solid #51279B", borderRadius: "0.5em", width: "100%" }} />
              <IconButton sx={{ visibility: fullScreenHandle.active ? "visible": "hidden" }} color="primary" aria-label="Restart game" component="span" onClick={startGame}>
                <ReplayIcon />
              </IconButton>
              <IconButton sx={{ visibility: fullScreenHandle.active ? "visible": "hidden" }} color="primary" aria-label="Restart game" component="span" onClick={fullScreenHandle.exit}>
                <FullscreenExitIcon />
              </IconButton>
            </FullScreen>
          </Grid>
          <Grid item xs={12}>
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
              How to play
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Use <b>A</b> to rotate left and <b>D</b> to rotate right.
              <br />
              Try to eat as much food as you can without hitting yourself or the wall.
            </Typography>
            <IconButton color="primary" aria-label="Restart game" component="span" onClick={startGame}>
              <ReplayIcon />
            </IconButton>
            <IconButton color="primary" aria-label="Enter Full-Screen Mode" component="span" onClick={fullScreenHandle.enter}>
              <FullscreenIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default Snake2DPage;
