import { useState, useEffect } from 'react';
import styles from '../../styles/Cadastro/ListaCadastro.module.css';
import firebase from '../firebase';
import CadastroUsers from '../Classes/CadastroUsuarios';
import { getIdade } from '../../utils/index';
import Link from 'next/link';
import Router from 'next/router';
import animationCoffe from '../../src/image/loading-coffe.json';
import Lottie from 'lottie-react-web';
import Menu from '../Components/Menu/index'

export default function ListCadastro() {
  const [cadastros, setCadastros] = useState([]);


  const handlerGetUsuarios = function () {
    let array = [];
    let Logins = null;

    firebase.firestore().collection('usuarios').get().then((docs) => {
      docs.forEach((doc) => {
        let data = doc.data();
        Logins = new CadastroUsers(doc.id, data.Nome, data.Email, data.Nascimento);
        array.push(Logins)
      });
      setCadastros([...array]);
    })

  };

  const handlerEditeCadastro = function (id: string) {
    const urlEdit = "/editCadastro?id=" + id;
    Router.push(urlEdit, undefined, { shallow: true });

  }


  const handlerCancelCadastro = function (id: string) {
  
    firebase.firestore().collection('usuarios').doc(id).delete().then(() => {
      alert("Cadastro Deletado")
      Router.reload();
    }).catch(() => { alert("Erro ao deletar cadastro") })
  }


  useEffect(handlerGetUsuarios, []);

  return (
    <>
      {cadastros.length === 0 ?

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
        <>
          <Menu></Menu>
        <section className={styles.containerListaCadastro}>
          <div className={styles.card}>
            <h1 className={styles.title}>Confira os usuarios Cadastrados</h1>
            {cadastros.map(function (obj: CadastroUsers) {
              return (
                <>
                  <div key={obj.Id} className={styles.card__body}>
                    <div>
                      <h1>Nome</h1>
                      <p>{obj.Nome}</p>
                    </div>
                    <div>
                      <h1>Email</h1>
                      <p>{obj.Email}</p>
                    </div>
                    <div>
                      <h1>Idade</h1>
                      <p>{getIdade(new Date(obj.DataNascimento), new Date())}</p>
                    </div>
                    <div className={styles.card__button}>
                      <button className={styles.card__button__editar} onClick={() => handlerEditeCadastro(obj.Id)}>Editar</button>
                      <button className={styles.card__button__deletar} onClick={()=> handlerCancelCadastro(obj.Id)}>Deletar</button>
                    </div>
                  </div>
                  <hr />

                </>
              )
            })

            }
            <div className={styles.card__back__Button}>
              <Link href="/">
                <button className={styles.button__back}>Voltar</button>
                </Link>
             </div>
          </div>
        
          </section>
          </>
      }
    </>
  );
}