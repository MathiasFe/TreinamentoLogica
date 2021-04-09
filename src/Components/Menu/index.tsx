import styles from '../../../styles/Componets/Menu/Menu.module.css';
import Link from 'next/link';

export default function Menu() {
  return (
    <header className={styles.container__menu}>
      <nav className={styles.menu}>
        <div ></div>
        <div></div>
        <div className={styles.menu__link}>
          <ul>
            <li>
              <Link href="/PrimeiraLetra">
                <button className={styles.letras}>Letras</button>
              </Link>
            </li>
            <li>
              <Link href="/jogodavelha">
              <button className={styles.velha}> Jogo da Velha</button>
                </Link>
            </li>
            <li>
              <Link href="/cadastro">
              <button className={styles.cadastro}> Cadastrar um cliente</button>
                </Link>
            </li>
            <li>
              <Link href="/listaCadastro">
              <button className={styles.verificar}> Verificar Cadastro</button>
                </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}