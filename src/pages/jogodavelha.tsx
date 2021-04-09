import styles from '../../styles/JogodaVelha/JogoDaVelha.module.css';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import TableTicTacToe from '../Components/TableTicTacToe';
import Menu from '../Components/Menu';

export default function Game() {
  const [inicioGame, setInicioGame] = useState('');
  const [iniciarJogo, setIniciarJogo] = useState(false);

  const optionGameChecked = function (event) {
    if (event.target.innerText !== "")
      setInicioGame(event.target.innerText);
  }

  const startGame = function () {
    if (inicioGame === "") {
      alert("É necessario escolher se você será o X ou o O");
      return;
    }

    setIniciarJogo(true);
  }

  return (
    <>
      {iniciarJogo === true ?
        (<TableTicTacToe GameInicio={inicioGame}></TableTicTacToe>)
        :
        (
          <>
            <Menu></Menu>
            <section className={styles.containerPreGame}>
              <h1>Bem vindo ao Game !!!!</h1>
              {
                inicioGame !== "" ? <p>Você escolheu o: <span className={inicioGame === "X" ? styles.spanX : styles.spanO}>{inicioGame}</span></p> : <p>É necessário escolher umas das opções:</p>
              }
              <div>
                <button onClick={optionGameChecked} className={styles.optionX}>X</button>
                <button onClick={optionGameChecked} className={styles.optionO}>O</button>
              </div>
              <br />
              <button onClick={startGame} className={styles.startGame}>Start Game</button>
              <Link href="/">
                <button className={styles.cancelGame}>Cancel Game</button>
              </Link>
            </section>
          </>
        )
      }

    </>
  );
}