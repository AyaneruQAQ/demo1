import React ,{createRef} from 'react';
import {ajax} from './util'
// import * as FilePond from 'filepond'
// import {FilePond,registerPlugin} from 'react-filepond'
// import 'filepond/dist/filepond.min.css'
// import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
// import FilePondPluginImagePreview  from 'filepond-plugin-image-preview'
import {Link,Prompt} from 'react-router-dom'
import ToolBar from './mid'
import InnerComponent from './refs'

// registerPlugin(FilePondPluginImageExifOrientation,FilePondPluginImagePreview)

export const MyContext = React.createContext({
  value:'light',
  toggle:()=>{},//使子组件可以改变context的值
})


class App extends React.Component {

  constructor(props) {
    super(props)
    //不能用ref，refs关键字作为变量名
    this.mybar = createRef()
    this.myref = createRef()

    this.toggle = ()=>{
      if(this.state.value ==='light'){
        this.setState({value:'dark'})
      }else{
        this.setState({value:'light'})
      }
    }

    this.state = {
      msg: '',
      imgs:'',
      value:'light',
      toggle:this.toggle,
      isStore:false,
    }
    this.get_msg = this.get_msg.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  static getDerivedStateFromProps(props,state){
    console.log(state)
    return state
  }

  componentDidMount(){
    console.log(this.myref)
    console.log(this.mybar)
  }

  get_msg() {
    // console.log('hello')
    let self = this
    ajax("GET","http://127.0.0.1:3001/users/msg",'').then((res)=>{
      let msg = JSON.parse(res)[0].username;
      self.setState({msg})
    }).catch((err)=>{
      console.log(err)
    })
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
    self.setState({isStore:false})

    ajax("POST",url,data)
    .then((res)=>{
      let da = JSON.parse(res)
      if(da.code === 1){
        alert(da.msg)
      }else{
        alert('注册成功')
      }
    }).catch()

  }

  render() {
    return (
      <>
        <Prompt when={this.state.isStore} message='有未保存的内容，是否退出该页面？'/>
        <MyContext.Provider value={{value:this.state.value,toggle:this.state.toggle}}>
          <ToolBar ref={this.mybar}/>
        </MyContext.Provider>

        <Link to='/hooks'>hooks</Link>
        <Link to='/banner'>banner</Link>

        <InnerComponent ref={this.myref}/>

        <div >{this.state.msg}</div>
        <div id='test'></div>
        <button onClick={this.get_msg}>点我</button>
        <button onClick={() => {//原生js也可以在react中操作dom
          document.getElementById('test').innerHTML = 'helloss'
        }}>dianyixia</button>
        <form onSubmit={(e) => { this.handleSubmit(e) }} >
          用户名：<input type='text' autoComplete='new-password' value={this.state.name || ''} onChange={(e) => { this.setState({ name: e.target.value,isStore:true }) }} />
          密码：<input type='password' autoComplete='new-password' value={this.state.pwd || ''} onChange={(e) => { this.setState({ pwd: e.target.value }) }} />
          <input type='submit' value='注册' />
        </form>
        {/* <FilePond
          allowMultiple={true}
          files={this.state.files}
          onupdatefiles={(fileitems) => {
            this.setState({
              file: fileitems.map(item => item.file)
            })
          }}
        ></FilePond> */}

      </>
    )
  }
}

export default App;
