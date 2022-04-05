import React from "react"

import Navbar from "../Navbar"
import styles from './PendingTransaction.module.css'
import myCoin from '../../services/index'
import TransactionRow from '../TransactionRow'

function PendingTransaction() {

  const [pendingTransactions, setPendingTransactions] = React.useState(myCoin.getPendingTransactions())

  const handleStartMining = () => {
    myCoin.startMining()
  }

  return (
    <>
      <Navbar isSetting={false} isCreateTransaction={false} isPendingTransaction />
      <div className={styles.container} >
        <h3 className={styles.header} >Pending Transaction</h3>
        <div className={styles.headerContainer}>
          <h4>#</h4>
          <h4>From</h4>
          <h4>To</h4>
          <h4>Amount</h4>
          <h4>Timestamp</h4>
          <h4>Valid?</h4>
        </div>
        {pendingTransactions.map((transaction, index) => <TransactionRow index={index} transaction={transaction} key={index} />)}
        {pendingTransactions.length === 0 ? null : <button onClick={handleStartMining}>Start mining</button>}
      </div>
    </>
  )
}

export default PendingTransaction