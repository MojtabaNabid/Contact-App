import styles from "./Header.module.css"


function Header() {
  return (
    <div className={styles.container}>
      <h1>Contact App</h1>
      <p>
        <a href="https://github.com/MojtabaNabid/contact-app">My GitHub</a> | Mojtaba Nabid (Nik)
      </p>
    </div>
  )
}

export default Header
