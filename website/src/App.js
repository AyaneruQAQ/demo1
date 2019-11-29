import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: '',
      imgs:''
    }
    this.get_msg = this.get_msg.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  get_msg() {
    console.log('hello')
    let self = this
    let url = 'http://127.0.0.1:3001/users/msg'
    let xhr = new XMLHttpRequest()
    xhr.open("GET", url)
    xhr.send(null)
    xhr.onreadystatechange = function(){
      if(xhr.readyState === XMLHttpRequest.DONE){
        if(xhr.status === 200){
          let msg = JSON.parse(xhr.responseText)[0].username;
          console.log(msg)
          self.setState({msg})
        }
      }
    }
  }


  handleSubmit(e){
    e.preventDefault()
    let self = this
    let url = 'http://127.0.0.1:3001/register'
    let data = JSON.stringify({
      username:self.state.name,
      password:self.state.pwd,
      type:1
    })
    // let data = new FormData()
    // data.append('username',self.state.username)
    // data.append('password',self.state.pwd)
    // data.append('type',1)
    console.log(data)
    let xhr = new XMLHttpRequest()
    xhr.open("POST",url)
    xhr.setRequestHeader('Content-Type','application/json;charset=utf-8')
    // xhr.withCredentials = true
    // xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
    xhr.send(data)
    xhr.onreadystatechange = function(){
      if(xhr.readyState === XMLHttpRequest.DONE){
        if(xhr.status === 200){
          let da = JSON.parse(xhr.responseText)
          if(da.code === 1){
            alert(da.msg)
          }else{
            alert('注册成功')
          }
        }
      }
    }
  }

  render() {
    return (
      <>
        <div >{this.state.msg}</div>
        <div id='test'></div>
        {/* <img src={this.state.imgs}/> */}
        <button onClick={this.get_msg}>点我</button>
        <button onClick={()=>{document.getElementById('test').innerHTML='helloss'}}>dianyixia</button>
        <form onSubmit={(e)=>{this.handleSubmit(e)}} >
          用户名：<input type='text' value={this.state.name||''} onChange={(e)=>{this.setState({name:e.target.value})}}/>
          密码：<input type='password' value={this.state.pwd||''} onChange={(e)=>{this.setState({pwd:e.target.value})}}/>
          <input type='submit' value='注册' />          
        </form>
      </>
    )
  }
}

export default App;
