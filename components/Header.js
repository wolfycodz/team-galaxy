import styles from './Header.module.css'

export default function Header() {
  return (
    <>
      <h1 className={styles.Header}>
        <img src="/Group 5logo_tg_header.png" alt="team galaxy logo" className={styles.logo} />
      </h1>
    </>
  )
}
