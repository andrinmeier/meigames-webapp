import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef, useState, useCallback } from 'react';
import { Game } from 'meigames-snake2d';
import Typography from '@mui/material/Typography';
import Image from 'next/image'
import snakeTitleImage from '../../../public/snake2d_title.png';
import { Grid, IconButton, Paper, Box } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';

const Snake2DPage: NextPage = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState("0");
  const fullScreenHandle = useFullScreenHandle();

  const displayScore = useCallback((newScore: number) => {
    setScore(newScore.toString());
  }, []);

  const onGameDone = useCallback((finalScore: number) => {
    setScore(`${finalScore} (end)`);
  }, []);

  const startGame = useCallback(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current as any;
    const context = canvas.getContext("webgl2");
    const game = new Game(context, canvas);
    game.registerOnScoreChanged(displayScore);
    game.registerOnGameDone(onGameDone);
    game.start();
    setScore("0");
  }, [canvasRef, displayScore, onGameDone]);

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
              alt="Snake 2D"
              placeholder="blur"/>
          </Grid>
          <Grid item xs={12}>
            <FullScreen handle={fullScreenHandle}>
              <canvas ref={canvasRef} id="snake2d-canvas" className="game-canvas" />
              <Grid style={{ minHeight: '10%' }} container sx={{ justifyContent: "center", alignItems: "center" }} spacing={5}>
                <Grid item>
                  <IconButton size="small" color="primary" aria-label="Restart game" component="span" onClick={startGame}>
                    <ReplayIcon sx={{ width: 32, height: 32 }} />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Typography variant="h4">
                    {score}
                  </Typography>
                </Grid>
                <Grid item>
                  <IconButton size="small" sx={{ display: fullScreenHandle.active ? "block" : "none" }} color="primary" aria-label="Exit full screen" component="span" onClick={fullScreenHandle.exit}>
                    <FullscreenExitIcon sx={{ width: 32, height: 32 }} />
                  </IconButton>
                  <IconButton size="small" sx={{ display: fullScreenHandle.active ? "none" : "block" }} color="primary" aria-label="Enter full screen" component="span" onClick={fullScreenHandle.enter}>
                    <FullscreenIcon sx={{ width: 32, height: 32 }} />
                  </IconButton>
                </Grid>
              </Grid>
            </FullScreen>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2">
              How to play
            </Typography>
            <Typography variant="body1">
              Use <b>A</b> to rotate left and <b>D</b> to rotate right.
              <br />
              On a mobile device <b>click</b> somewhere and <b>move your finger</b> while <b>not losing contact with your screen</b>.
              <br />
              Try to eat as much food as you can without hitting yourself or the wall.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default Snake2DPage;
