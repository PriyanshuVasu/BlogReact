import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../Appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBttn() {

    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
    return (
        <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        onClick={logoutHandler}>
            Log Out
        </button>
    )
}

export default LogoutBttn
