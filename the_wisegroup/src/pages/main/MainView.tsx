import styles from '@css/main.module.css'
import HeaderView from '@pages/header/HeaderView'
import { useState } from 'react' 

const MainView = (): JSX.Element => {
  return (
    <>
    <HeaderView />
      <main className={styles.container}>
        <section className="content">
        </section>
        <section className="content">

        </section>
        <section className="content">

        </section>
        <section className="content">

        </section>
        <section className="content">

        </section>
        <section className="content">

        </section>
      </main>
    </>
  )
}

export default MainView