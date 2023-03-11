import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import styles from '@css/header.module.css'
import NavList from '@component/header/NavList';

/* import { NavList1, NavList2, NavList3, NavList4, NavList5, NavList6 } from '@component/header/NavLists' */

const HeaderView = (): JSX.Element => {
  /** 헤더리스트 타이틀 */
  const mainArr = [
    ["회사소개", "tmp"], 
    ["사업분야", "tmp"], 
    ["사업실적", "tmp"], 
    ["주택전시관", "tmp"], 
    ["홍보센터", "tmp"], 
    ["인재채용", "tmp"]
  ]

  return (
    <header>
      <div className={styles.container}>
        <div className="logo">
          <p className={styles.logo}><span>T</span>he Company</p>
        </div>
        <nav className={styles.menu}> 
          {mainArr.map((x, i) => <NavList text={x[0]} link={x[1]} num={i}></NavList>)}
        </nav>
        <FontAwesomeIcon icon={faBars} size="3x" className={styles.barIcon}></FontAwesomeIcon>
      </div>
    </header>
  )
}

export default HeaderView