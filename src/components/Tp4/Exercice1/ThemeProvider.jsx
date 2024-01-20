import React, { createContext, useState } from 'react'
import ThemeButton from './ThemeButton'
import ThemeMessage from './ThemeMessage'

export const Usercontext=createContext(null)
function ThemeProvider() {
    
  const [theme, setTheme]=useState('light')
  const toggeleName=()=>{
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light')); }
  return (
    
    <Usercontext.Provider value={{theme,toggeleName}}>
       <div>
        <ThemeButton></ThemeButton>
        <ThemeMessage></ThemeMessage>
        </div>    
       
    </Usercontext.Provider>
  )
}

export default ThemeProvider
