import React from 'react'

import Navbar from "../Navbar"
import styles from './Setting.module.css'
import myCoin from '../../services/'

function Setting() {

  const [difficulty, setDifficulty] = React.useState(myCoin.getDifficulty())
  const [reward, setReward] = React.useState(myCoin.getReward())

  const handleDifficultyChange = e => {
    let diff = e.target.value
    diff === "" ? diff = 0 : diff = diff
    if (!isNaN(diff)) {
      setDifficulty(+diff)
    }
  }

  const handleRewardChange = e => {
    let rew = e.target.value
    rew === "" ? rew = 0 : rew = rew
    if (!isNaN(rew)) {
      setReward(+rew)
    }
  }

  const handleUpdateSettings = () => {
    myCoin.updateSettings(difficulty, reward)
  }

  return (
    <>
      <Navbar isSetting isCreateTransaction={false} isPendingTransaction={false} />
      <div className={styles.container} >
        <h3 className={styles.header}>Settings</h3>
        <div>
          <label htmlFor="difficulty">Difficulty</label><br/>
          <input 
            type="text" 
            id="difficulty" 
            value={difficulty}
            onChange={handleDifficultyChange}
          />
        </div>
        <div>
          <label htmlFor="reward">Mining reward</label><br/>
          <input 
            type="text" 
            id="reward" 
            value={reward}
            onChange={handleRewardChange}
          />
        </div>
        <button onClick={handleUpdateSettings}>Update settings</button>
      </div>
    </>
  )
}

export default Setting