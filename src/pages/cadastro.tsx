import React, { useState } from 'react';
import Link from 'next/link';
import firebase from '../firebase';
import styles from '../../styles/Cadastro/Cadastro.module.css';
import { firstLetterToUpper, getIdade } from '../../utils/index';
import Menu from '../Components/Menu';


export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [mensagemError, setMensagemError] = useState("");

  const handlerChangeName = function (event) {
    setNome(firstLetterToUpper(event.target.value));
  }

  const handlerChangeEmail = function (event) {
    setEmail(event.target.value);
  }

  const handlerChangeIdade = function (event) {
    setDataNascimento(event.target.value);
  }


  const handlerCadastro = function (event) {
    event.preventDefault();
    firebase.firestore().collection("usuarios").add({ Nome: nome, Email: email, Nascimento: dataNascimento })
      .then(() => {
        alert("Funcionou");
        setNome("");
        setEmail("");
        setDataNascimento("dd/mm/aaaa");
      })
      .catch(() => { "não deu certo" });


  }



  return (
    <>
      <div>
        <Menu></Menu>
      <section className={styles.containerCadastro}>
        <div className={styles.card}>
          <div className={styles.card__body}>
            <h1>Realize o seu cadastro</h1>
            {!mensagemError &&
              <span className={styles.mensagemErro}>
                {mensagemError}
              </span>
            }

            <form onSubmit={handlerCadastro}>
              <div className={styles.card__nome}>
                <label htmlFor="">Nome completo</label>
                <input type="text" value={nome} onChange={handlerChangeName} />
              </div>
              <div className={styles.card__email}>
                <label htmlFor="">Email</label>
                <input type="email" value={email} onChange={handlerChangeEmail} />
              </div>
              <div className={styles.card__idade}>
                <label htmlFor="">Idade</label>
                <input type="date" value={dataNascimento} onChange={handlerChangeIdade} />
              </div>
              <div className={styles.card__button}>
                <button type="submit" className={styles.card__salvar}>Salvar</button>
                <Link href="/">
                  <button className={styles.card__cancelar}>Voltar</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}