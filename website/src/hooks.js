import React,{useState} from 'react'


function Hooks(){
    const [age,setAge] = useState(12)
    // if(tof){
    //     const [fruit,setFruit] = useState('apple')
    //     tof = !tof
    // }
    const [todos,setTodos] = useState([{text:'learn hook'}])
    console.log(age,todos[0].text)

    return(
        <div>nihao</div>
    )
}

export default Hooks