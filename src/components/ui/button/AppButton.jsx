import React from 'react'
import classes from './AppButton.module.css'

const AppButton = ({children, ...props}) => {
  return (
    <button type="button" {...props} className={classes.appButton}>{children}</button>
  )
}

export default AppButton
