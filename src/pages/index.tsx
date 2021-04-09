
import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import Menu from '../Components/Menu/index';


export default function Home() {
  return (
    <section>
      <Menu></Menu>
      <div className={styles.container}>
        <main className={styles.main}>

          <h1 className={styles.title}>
            Welcome
        </h1>

          <div className={styles.card}>
            <div>
              <Link href="/PrimeiraLetra">
                <button className={styles.letras}>Letras</button>
              </Link>
            </div>
            <div>
              <Link href="/jogodavelha">
                <button className={styles.jogoVelha}>Jogo da Velha</button>
              </Link>
            </div>
            <div>
              <Link href="/cadastro">
                <button className={styles.cadastro}>Cadastrar um cliente</button>
              </Link>
            </div>
            <div>
              <Link href="/listaCadastro">
                <button className={styles.listaCadastro}>Verificar Cadastros</button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </section>
  )
}
