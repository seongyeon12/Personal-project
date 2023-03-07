import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import styles from '@css/main.module.css'
import NavList from '@component/header/NavList';

import lists from '@component/header/lists'

const HeaderView = (): JSX.Element => {
  /** 1번째 칸 루트, 2번째 텍스트 */
  const ul = document.getElementsByClassName('menuLists')
  console.log(lists[1][5])

  for (let i = 0; i < ul.length; i++) {
    for (let j = 0; j < lists[i].length; j++) {
      console.log(lists[i][j])
    }
  } 
  

  return (
    <header>
      <div className="logo">
        <p className={styles.logo}><span>T</span>he Company</p>
      </div>
      <nav className={styles.menu}> 
        <NavList/>
        <NavList/>
        <NavList/>
        <NavList/>
        <NavList/>
        <NavList/>
      </nav>
      <FontAwesomeIcon icon={faBars} size="3x" className={styles.barIcon}></FontAwesomeIcon>
    </header>
  )
}

/*         <Link to="/tmp">회사소개</Link>

        <Link to="/tmp">사업분야</Link>

        <Link to="/tmp">사업실적</Link>

        <Link to="/tmp">주택전시관</Link>

        <Link to="/tmp">홍보센터</Link>

        <Link to="/tmp">인재채용</Link> */

export default HeaderView