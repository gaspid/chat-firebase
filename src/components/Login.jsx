import React from 'react'
import { Button } from 'primereact/button'
import './css/login.css'
import authGoogle from './logic/logic'
import { useSelector } from 'react-redux'
import { incriment } from '../app/slice'

const Login = () => {
  const count = useSelector((store) => store.toolkit.count)
  incriment()
  console.log(count)

  return (
    <div className="login-block">
      <div id="login">
        <div className="login-text">Authorization via Google{count}</div>
        <div className="login">
          <Button onClick={authGoogle} className="google p-0">
            <i className="pi pi-google px-2"></i>
            <span className="px-3">Google</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Login