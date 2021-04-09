import styles from '../../../styles/JogodaVelha/JogoDaVelha.module.css';
import React, { useState, useEffect } from 'react';

interface GameConfig {
  GameInicio: string;
}


export default function Game({ GameInicio }: GameConfig) {
  const emptyBoard = Array(9).fill("");
  const [board, setBoard] = useState(emptyBoard);
  const [playerGame, setPlayerGame] = useState(GameInicio);
  const [isWinner, setIsWinner] = useState(false);
  const [isVelha, setIsVelha] = useState(false);

  const handlerClick = (index) => {

    if (board[index] !== "") return;

    setBoard(board.map(function (item, itemIndex) { return itemIndex === index ? playerGame : item }))

    setPlayerGame(playerGame === "O" ? "X" : "O");

  };

  const resetGame = function () {
    setIsWinner(false);
    setIsVelha(false);
    setBoard(emptyBoard);
    setPlayerGame('X');
  }

  const verificaEmpate = () => {
    if (!isWinner) {
      if(board.every(cell => cell !== ""))
         setIsVelha(true);
     }
  
  }

  const verificaVitoria = () => {
    const arrayPossibleWinner = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],

      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],

      [board[0], board[4], board[8]],
      [board[6], board[4], board[2]],
    ]
    arrayPossibleWinner.forEach(
      cells => {
        if (cells.every(cell => cell === "O")) {
          setIsWinner(true);
          setPlayerGame("O");
        };
        if (cells.every(cell => cell === "X")) {
          setIsWinner(true);
          setPlayerGame('X');
        }
      })
      verificaEmpate();
  }

  useEffect(verificaVitoria, [board])


  return (
    <>
      <section className={styles.container}>
        <div className={styles.board}>
          {board.map(function (elemento, index) {
            return (
              <div key={index} className={styles.cells} data-jogada={elemento} onClick={() => handlerClick(index)}>{elemento}</div>
            )
          })}
          {isWinner &&
            <div className={styles.painel}>
              <div style={{ textAlign: 'center' }}>
                <h1>Winner !!!</h1>
                <p>O jogador {playerGame} foi o vencedor</p>
                <button className={styles.novoJogo} onClick={() => resetGame()}>Novo jogo</button>

              </div>
            </div>
          }

          {isVelha &&
            <div className={styles.painel}>
              <div style={{ textAlign: 'center' }}>
                <h1>Deu Ruim</h1>
                <p>O jogo Foi Bom mas Deu Velha</p>
                <button className={styles.novoJogo} onClick={() => resetGame()}>Novo jogo</button>

              </div>
            </div>
          }

        </div>
      </section>
    </>
  );
}