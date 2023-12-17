import React from 'react'
import styles from './Animatemenu.module.css'
function AnimateMenu({change}:any) {
    
  return (
    <div className={styles.body }>
    <label  className={styles.label} htmlFor="check">
      <input onChange={(event)=>change(event.target.checked)} className={styles.input} type="checkbox"  id="check" />
      <span className={styles.span}></span>
      <span className={styles.span}></span>
      <span className={styles.span}></span>
    </label>
  </div>
  )
}

export default AnimateMenu