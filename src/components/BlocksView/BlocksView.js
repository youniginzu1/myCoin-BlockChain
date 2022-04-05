import React from 'react'

import myCoin from '../../services'
import Block from '../Block'
import BlockDetails from '../BlockDetails/BlockDetails'
import styles from './BlocksView.module.css'

const blocks = myCoin.getBlocks()

function BlocksView() {

  const [blockSelect, setBlockSelect] = React.useState(blocks[1])

  const handleSelectBlock = (block) => {
    if (block.previousHash !== "0") {
      setBlockSelect(block)
    }
  }

  return (
    <div className={styles.container}>
      <h1>Blocks on chain</h1>
      <p>Each card represents a block on the chain. Click on a block to see the transactions stored inside.</p>
      <div className={styles.blockView}>
        {
          blocks.map((block, index) => 
            <Block 
              block={block} 
              key={index}
              onSelectBlock={handleSelectBlock}
              index={index}
            />)
        }
      </div>
      <BlockDetails block={blockSelect}/>
    </div>
  )
}

export default BlocksView