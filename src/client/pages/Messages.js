import React, { useEffect } from 'react'

const Messages = () => {
    
    useEffect(() => {
        //let socket = new WebSocket('ws://localhost:3000')
        console.log('тут будет устанавливаться сокет')

        /*const openConnection = (connection) => {
            connection.onopen = () => {
                console.log('соединение установлено')
            }
        }*/
        //const wsConnection = new WebSocket("http://localhost:3000")
        
        //openConnection(wsConnection)

        return () => {
            wsConnection.onclose = function(event) {
                if (event.wasClean) {
                    alert('Соединение закрыто чисто');
                } else {
                    alert('Обрыв соединения'); // например, "убит" процесс сервера
                }
                alert('Код: ' + event.code + ' причина: ' + event.reason);
            };

        }

    }, [])
    return (
        <div>
            <p>сообщения</p>
        </div>
    )
}

export default Messages
