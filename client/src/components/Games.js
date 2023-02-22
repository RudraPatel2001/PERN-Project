import React from 'react'
import '../css/games.css';
import TicTacToe from '../images/TicTacToe.png';
import GuessTheColor from '../images/GuessTheColor.png';
import RockPaperScissor from '../images/RockPaperScissor.png';
import Quiz from '../images/Quiz.png';

function Games() {
  return (
    <div className='games'>
      <div className='head'>Games to Play!</div>
      <div className='gamesContainer'>
        <div className='gameCard'>
          <div className='gameTitle'>1. TicTacToe!</div>
          <div className='gameDes'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar dapibus lorem, non feugiat libero. Pellentesque tristique ex in felis facilisis dictum. felis facilisis.</div>
          <div className='containLink'>
            <a href='https://rudra1402.github.io/tictactoe.github.io/ttt.html' target='_blank'>Play</a>
            <a href={TicTacToe} target='_blank'>Scan QR</a>
          </div>
        </div>
        <div className='gameCard'>
          <div className='gameTitle'>2. Guess the Color!</div>
          <div className='gameDes'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar dapibus lorem, non feugiat libero. Pellentesque tristique ex in felis facilisis dictum. felis facilisis.</div>
          <div className='containLink'>
            <a href='https://rudra1402.github.io/gtc.github.io/gtc.html' target='_blank'>Play</a>
            <a href={GuessTheColor} target='_blank'>Scan QR</a>
          </div>
        </div>
        <div className='gameCard'>
          <div className='gameTitle'>3. Rock Paper Scissors</div>
          <div className='gameDes'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar dapibus lorem, non feugiat libero. Pellentesque tristique ex in felis facilisis dictum. felis facilisis.</div>
          <div className='containLink'>
            <a href='https://rudra1402.github.io/rps.github.io/rockpaperscissor.html' target='_blank'>Play</a>
            <a href={RockPaperScissor} target='_blank'>Scan QR</a>
          </div>
        </div>
        <div className='gameCard'>
          <div className='gameTitle'>4. Technical Quiz</div>
          <div className='gameDes'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar dapibus lorem, non feugiat libero. Pellentesque tristique ex in felis facilisis dictum. felis facilisis.</div>
          <div className='containLink'>
            <a href='https://rudra1402.github.io/quiz.github.io/temp3.html' target='_blank'>Play</a>
            <a href={Quiz} target='_blank'>Scan QR</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Games;