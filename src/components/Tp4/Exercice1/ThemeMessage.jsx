import React, { useContext} from 'react'
import { Usercontext } from './ThemeProvider' 


function ThemeMessage() {

    const themeMess=useContext(Usercontext)

    const {theme}=themeMess
  return (
    <div>
      <p> {theme}  theme message   </p>
    </div>
  )
}

export default ThemeMessage
