import React from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer } from 'react-toastify'

import Login from './containers/login'
import Register from './containers/register'
import GlobalStyles from './styles/globalStyles'

ReactDOM.render(
    <>
        <Register />
        <ToastContainer autoClose = {2000}/>
        <GlobalStyles />

    </>,

    document.getElementById('root')
)
