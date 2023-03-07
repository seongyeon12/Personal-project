import styles from '@css/main.module.css'
import { useRef } from 'react'

/* interface Props {
  list: string[][]
} */

const NavList = (): JSX.Element => {
/*     const ul = document.getElementsByClassName('menuLists')
    console.log(ul)
    
    const li = document.createElement("li")
    li.textContent = "list"
    ul[0]?.appendChild(li) */

  return (
    <>
    <ul className={`${styles.menuList}`}>
      <li>회사소개</li>
      <li>
        <ul className={`${styles.menuLists} menuLists`}>
          <li>dk</li>
          <li>d</li>
          <li>d</li>
          <li>d</li>
        </ul>
      </li>
    </ul>
    </>
  )
}

export default NavList