import React, { useContext } from 'react'
import { Usercontext } from './ThemeProvider'


function ThemeButton() {

    const usetheme=useContext(Usercontext)
    const {theme,toggeleName}=usetheme;
    


  return (
    <div>
     <button  
       style={{backgroundColor:theme ==='light'? '#333'   :'#fff',width:300,height :150}}
       onClick={toggeleName}
       > theme  button</button>
    </div>
  )
}

export default ThemeButton
