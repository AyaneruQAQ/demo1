import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: ''
    }
    this.get_msg = this.get_msg.bind(this);
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

  render() {
    return (
      <>
        <div>{this.state.msg}</div>
        <button onClick={this.get_msg}>点我</button>
      </>
    )
  }
}

export default App;
