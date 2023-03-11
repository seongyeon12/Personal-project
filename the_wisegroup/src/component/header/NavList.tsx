import { Link } from 'react-router-dom';
import styles from '@css/header.module.css'

import SubList from '@component/header/SubList'
import subLists from '@component/header/subLists'

interface Props {
  text: string
  link: string
  num: number
}

/**
 * link, text: 첫 리스트 |
 * num: 0부터 시작, sublists
 */
const NavList = ({text, link, num}: Props): JSX.Element => {
  console.log(subLists[num][0])
  return (
    <ul className={styles.manuList}>
      <li>
        <Link to={link}>{text}</Link> 
      </li>

      <li>
        <ul className={styles.subList}>
        {subLists[num].map((arr) => <SubList 
        text={arr[0]}
        link={arr[1]}
        ></SubList>)}
        </ul>
      </li>
    </ul>
  )
}

export default NavList