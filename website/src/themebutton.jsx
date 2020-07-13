import React from 'react'
import {Button} from 'antd'
import {MyContext} from './App'

function ThemeButton(){
    return(
        <MyContext.Consumer>
            {({value,toggle})=>(
                <Button
                    onClick={toggle}
                >{value}</Button>
            )}
        </MyContext.Consumer>
    )
}

export default ThemeButton;