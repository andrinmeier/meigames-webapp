import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react';
import { Game } from 'meigames-snake2d';

const Snake2DPage: NextPage = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);

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
      setScore(score => -1);
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
      <h1>Snake 2D</h1>
      <p>{score}</p>
      <canvas ref={canvasRef} id="snake2d-canvas" style={{ width: "100%", height: "100%" }} />
    </div>
  )
}

export default Snake2DPage;
