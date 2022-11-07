import { createContext, useState } from "react";

const Notification = ({message, severity}) => {

    const notificationStyle = {
        position: 'absolute',
    backgroundcolor: severity === 'success' ? 'rgba(65, 209, 65, 0.89)' : 'red' ,
    top: 100,
    right: 10,
    width: 'auto',
    height: 'auto',
    color: 'white',
    padding: '10 20 10 20'
    }

    if(message === '') return

    return(
        <div style={notificationStyle} className={severity === 'success' ? 'greenClass' : 'redClass'}>
            {message}
        </div>
    )
}

 export const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {

    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('success')


    const setNotification = (severity, message) => {
        setMessage(message)
        setSeverity(severity)

        setTimeout(() => {
            setNotification('')

        },2000)

    }




    return(
        <NotificationContext.Provider value={{setNotification}}>
            <Notification severity={severity} message={message}/>
            { children }
        </NotificationContext.Provider>
    )
}