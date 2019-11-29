module.exports = function(server){
   let io = require('socket.io').listen(server)

    io.on('connection',function(socket){
        console.log('有一个用户连接上了服务器')

        socket.on('sendMsg',function(data){
            console.log('服务器接收到消息',data)

            data.name = data.name.toUpperCase()
            
            socket.emit('receiveMsg',data)
        })
    })
}