//refs转发
import React from 'react';
import { Button } from 'antd';

function hocComponent(WrappedComponent) {
    class HocComponent extends React.Component{
        componentDidUpdate(prev){
            console.log('old',prev);
            console.log('new',this.props)
        }

        render(){
            const {forwardRef,...rest} = this.props
            return <WrappedComponent ref={forwardRef} {...rest}/>
        }
    }

    return React.forwardRef((props,ref)=>{
        return <HocComponent {...props} forwardRef={ref}/>
    })
}

// function InnerComponent(props) {
//     return(
//         <Button className="inner">按钮</Button>
//     )
// }

const InnerComponent = React.forwardRef((props,ref)=>(
    <Button className="inner" ref={ref} {...props}>按钮</Button>
))

export default hocComponent(InnerComponent)

