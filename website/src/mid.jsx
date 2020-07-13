import React from 'react'
import ThemeButton from './themebutton.jsx'

const ToolBar = React.forwardRef((props,ref)=>(
        <div>
            <button ref={ref}>ref</button>
            <ThemeButton/>
        </div>

))


export default ToolBar;