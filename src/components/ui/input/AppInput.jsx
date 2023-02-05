import React from 'react'
import classes from './AppInput.module.css'

const AppInput = React.forwardRef((props, ref) => {
  return (
    <input ref={ref} className={classes.appInput} {...props} />
  )
})

export default AppInput
