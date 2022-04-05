import React from "react"

import Navbar from "../Navbar"
import styles from './CreateTransaction.module.css'
import myCoin from '../../services/index'

function CreateTransaction() {

  const [fromAddress, setFromAddress] = React.useState(myCoin.walletKeys[0].publicKey)
  const [toAddress, setToAddress] = React.useState('')
  const [amount, setAmount] = React.useState(0)

  const handleToAddressChange = e => {
    setToAddress(e.target.value)
  }

  const handleAmountChange = e => {
    let amount = e.target.value
    amount === "" ? amount = 0 : amount = amount
    if (!isNaN(amount)) {
      setAmount(+amount)
    }
  }

  const handleCreateTransaction = () => {
    if (toAddress !== '' && amount !== 0) {
      myCoin.addTransaction(fromAddress, toAddress, amount)
      setToAddress('')
      setAmount(0)
    } else {
      alert('Create Transaction error!')
    }
  }

  return (
    <>
      <Navbar isCreateTransaction isSetting={false} isPendingTransaction={false} />
      <div className={styles.container} >
        <h3 className={styles.header} >Create Transaction</h3>
        <p>Transfer some money to someone!</p>
        <label htmlFor="fromAddress">From address</label><br/>
        <input 
          type="text" 
          id="fromAddress" 
          value={fromAddress}
          disabled
        /><br />
        <label htmlFor="toAddress">To address</label><br/>
        <input 
          type="text" 
          id="toAddress" 
          value={toAddress}
          onChange={handleToAddressChange}
        /><br />
        <label htmlFor="amount">Amount</label><br/>
        <input 
          type="text" 
          id="amount" 
          value={amount}
          onChange={handleAmountChange}
        /><br />
        <button onClick={handleCreateTransaction}>Sign{" & "}create transaction</button><br/>
      </div>
    </>
  )
}

export default CreateTransaction