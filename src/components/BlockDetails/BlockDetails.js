import TransactionRow from '../TransactionRow'
import styles from './BlockDetails.module.css'

function BlockDetails({block}) {

  return (
    <div className={styles.blockDetailsContainer}>
      <h1>Transactions inside block</h1>
      <div className={styles.header}>
        <h4>#</h4>
        <h4>From</h4>
        <h4>To</h4>
        <h4>Amount</h4>
        <h4>Timestamp</h4>
        <h4>Valid?</h4>
      </div>
      {
        block ? block.transactions.map((transaction, index) => 
          <TransactionRow 
            transaction={transaction} 
            timestamp={block.timestamp} 
            key={index} 
            index={index} 
          />
          ) : null
      }
    </div>
  )
}

export default BlockDetails