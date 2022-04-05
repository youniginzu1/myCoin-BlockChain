import clsx from 'clsx'

import styles from './Block.module.css'

function Block({block, isFirstBlock, onSelectBlock, index}) {

  return (
    <div className={styles.blockContainer} onClick={() => onSelectBlock(block)}>
      <p className={clsx(styles.underline, styles.row)}>
        Block
        <span className={styles.genesisBlock}>{index === 0 ? ' (Genesis Block)' : null}</span>
      </p>
      <div className={clsx(styles.underline, styles.row)}>
        <p>Hash</p>
        <p className={index % 2 === 0 ? styles.redHash : styles.greenHash}>{block.hash.substring(0, 25) + '...'}</p>
        <p>Hash Previous</p>
        <p className={index % 2 === 0 ? styles.greenHash : styles.redHash}>{block.previousHash === "0" ? "0" : block.previousHash.substring(0, 25) + '...'}</p>
      </div>
      <div className={clsx(styles.underline, styles.row)}>
        <p>Nonce</p>
        <p>{block.nonce}</p>
      </div>
      <div className={clsx(styles.row)}>
        <p>Timestamp</p>
        <p>{block.timestamp}</p>
      </div>
    </div>
  )
}

export default Block