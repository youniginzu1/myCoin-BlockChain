import styles from './TransactionRow.module.css'

function TransactionRow({transaction, index, timestamp}) {

  return (
    <div className={styles.container}>
      <p>{index}</p>
      <p>{!transaction.fromAddress ? "System" : transaction.fromAddress.substring(0, 15) + '...'}</p>
      <p>{transaction.toAddress.substring(0, 15) + '...'}</p>
      <p>{transaction.amount}</p>
      <p>{timestamp ? timestamp : transaction.timestamp}</p>
      <p>{transaction.isValid ? "True" : "False"}</p>
    </div>
  )
}

export default TransactionRow