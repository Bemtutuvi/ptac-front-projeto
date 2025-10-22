import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <span>Bem-Vindos!!</span>
      <nav>
        <a href="/">Iniciar</a>
        <a href="/login">Login</a>
        <a href="/cadastrar">Cadastro</a>
        <a href="/perfil">Perfil</a>
        <a href="editar">Atualizar Perfil</a>
      </nav>
    </header>
  )
}

export default Header
