import clsx from 'clsx'
import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'

function Navbar({ isSetting, isCreateTransaction, isPendingTransaction }) {

  return (
    <nav className={styles.navbar}>
      <Link to='/' className={styles.icon}>My Coin</Link>
      <div>
        <Link 
          to='/setting' 
          className={clsx(styles.btn, isSetting ? styles.disable : styles.active)} 
        >Settings
        </Link>
        <Link 
          to='/create-transaction' 
          className={clsx(styles.btn, isCreateTransaction ? styles.disable : styles.active)} 
        >Create transaction
        </Link>
        <Link 
          to='/pending-transaction' 
          className={clsx(styles.btn, isPendingTransaction ? styles.disable : styles.active)} 
        >Pending transaction
        </Link>
      </div>
    </nav>
  )
}

export default Navbar