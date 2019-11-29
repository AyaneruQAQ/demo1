import io from 'socket.io-client'

const socket = io('http://localhost:3001')

socket.emit('sendMsg',{name:'lizz'})

socket.on('receiveMsg',function(data){
    console.log('客户端接收到消息',data)
})