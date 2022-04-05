import BlocksView from '../BlocksView'
import Navbar from '../Navbar'
import styles from './Home.module.css'

function Home() {

  return (
    <div>
      <Navbar isSetting={false} isCreateTransaction={false} isPendingTransaction={false} />
      <BlocksView />
    </div>
  )
}

export default Home