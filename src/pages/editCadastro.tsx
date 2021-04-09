import React, { useState, useEffect } from 'react';
import styles from '../../styles/EdicaoCadastro/EdicaoCadastro.module.css'
import firebase from '../firebase';
import CadastroUsers from '../Classes/CadastroUsuarios';
import { useRouter } from 'next/router';
import Link from 'next/link';
import animationCoffe from '../../src/image/loading-coffe.json';
import Lottie from 'lottie-react-web';
import Menu from '../Components/Menu';



export default function EdicaoCadastro() {
  const [login, setLogin] = useState({} as CadastroUsers);
  const router = useRouter();
  const idLogin = router.asPath.split('=')[1];



  useEffect(() => {

    let novoUsuario = {} as CadastroUsers;
    firebase.firestore().collection("usuarios").doc(idLogin).get().then((doc) => {
      let data = doc.data();
      novoUsuario = new CadastroUsers(doc.id, data.Nome, data.Email, data.Nascimento);
      setLogin(novoUsuario);
    }).catch(() => {
      alert('erro');
    })

  }, []);


  function handlerNameUser(event) {
    setLogin({ ...login, Nome: event.target.value });

  }

  function handlerEmailUser(event) {
    setLogin({ ...login, Email: event.target.value });
  }
  function handlerNascimentoUser(event) {
    setLogin({ ...login, DataNascimento: event.target.value });
  }

  function onHandlerSubmit(event) {
    event.preventDefault();
    firebase.firestore().collection("usuarios").doc(idLogin).set({ Nome: login.Nome, Email: login.Email, Nascimento: login.DataNascimento })
      .then(() => {
        alert("Dados Alterados com sucesso");
      })
      .catch(() => { alert("error") });
  }

  return (
    <>
      <section>
        {login === null ?
          <div className={styles.containerLoading}>
            <div className={styles.card}>
              <Lottie
                options={{
                  animationData: animationCoffe,
                  loop: true
                }}
                speed={0.8}
                title="Loading"
                ariaLabel="Loading..."
                ariaRole="button"
                width={400}
              />
              <h2 className={styles.loading__h2}>Porque não tomar um café <br />enquanto preparamos os dados <span className={styles.pontoP}>.</span><span className={styles.pontoS}>.</span><span className={styles.pontoT}>.</span></h2>
            </div>
          </div>
          :
          <section>
            <Menu></Menu>
          <div className={styles.container}>
            <div className={styles.card}>
              <h1 className={styles.card__h1}>Edição de cadastro</h1>
              <form onSubmit={onHandlerSubmit}>
                <label htmlFor="">Nome</label>
                <input type="text" value={String(login.Nome)} onChange={handlerNameUser} />
                <label htmlFor="">Email</label>
                <input type="text" value={login.Email} onChange={handlerEmailUser} />
                <label htmlFor="">Nasciento</label>
                <input type="date" value={login.DataNascimento} onChange={handlerNascimentoUser} />
                <div>
                  <button type="submit" className={styles.form__button__alterar}>Alterar</button>
                  <Link href="/listaCadastro">
                    <button type="submit" className={styles.form__button__voltar}>Voltar</button>
                  </Link>
                </div>
              </form>
            </div>
            </div>
            </section>
        }
      </section>
   
    </>

  )
};


