import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/PrimeiraLetra/PrimeiraLetra.module.css';
import Menu from '../Components/Menu';


export default function PrimeiraLetra() {
  const [Resposta, setResposta] = useState("");
  const [Texto, setTexto] = useState("Teste");

  function buscarLetra() {
    if (Texto !== "") {
     let arrayText = [...(Texto.replace(' ', ''))];
      let contador;
      let unicaLetra = arrayText.find(function (letra, index, array) {
        contador = 0;
        for (var item in arrayText) {
          if (letra.toUpperCase() === arrayText[item].toUpperCase())
            contador++;
          console.log(arrayText[item])
        }
        if (contador > 0 && contador < 2)
          return letra;

       })


      setResposta(unicaLetra)
    }
    else
      alert('Será necessário inserir um texto ou palavra para prosseguir');

  }

  function handleChangeText(e) {
    setTexto(e.target.value);
  }


  return (
    <>
      <Menu></Menu>
      <section className={styles.container}>
        <div className={styles.back}>

        </div>
        <div className={styles.card}>
          <h1>Pegar a Primeira letra <br /> que não se repete</h1>
          <label htmlFor="utxtInserindo">Insira um Texto</label>
          <input id="utxtInserindo" value={Texto} type="text" onChange={handleChangeText}></input>
          <br />
          {!Texto && <><span className={styles.error}>Não é necessario inserir um texto/palavra para prosseguir</span><br /></>}
          <button className={styles.button} onClick={buscarLetra}>Verificar</button>
          <br />
          <p>
            A primeira Letra é:
            <br />
            {Resposta == "" ?
              (
                <span>Não foi inserido nenhum texto</span>
              )
              :
              (
                <span>{Resposta}</span>
              )
            }
          </p>
          <hr></hr>
          <section>
            <Link href="/">
              <button className={styles.back}>Voltar</button>
            </Link>
          </section>

        </div>
      </section>
    </>
  );
}