import { useState } from "react"
import '../App.css'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import store from "../Redux/store"


export default ()=>{

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const loginHandler = async (e)=>{
        e.preventDefault()
        const user = {
            email: email,
            password: password
        }

        let  abc = await axios.post('/login', user)
        let Loguser = abc.data

        if(Loguser){

            store.dispatch({
                type: "USER_LOGIN",
                payload: Loguser
            })
            navigate('/')
            
            localStorage.setItem('token', Loguser._id)
        } else{
            alert('User Not Found')
        }
    }

    return <>
    
    <div>
                <h3>
                    LOGIN FORM
                </h3>
                <form onSubmit={loginHandler}>
                    <div className='form-control'>
                        <input type='email' maxLength='30' required={true} placeholder='Enter Email...' onChange={(e)=> setEmail(e.target.value)} value={email}/>
                        <br />
                        <input type='password' maxLength='20' required={true} placeholder='Enter Password...' onChange={(e)=> setPassword(e.target.value)} value={password}/>
                    </div>
                    <button className='btn'> LOGIN </button>
                </form>
            </div>
  </>
  
}