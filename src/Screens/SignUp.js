import { useState } from "react"
import { useNavigate } from "react-router-dom"
import '../App.css'
import axios from 'axios'


export default ()=>{


    const [email, setEmail] = useState('')
    const [username, setUsename] = useState('')
    const [password, setPassword] = useState('')

    const Nav = useNavigate()

    const signupHandler = async (e)=>{
        e.preventDefault()

        const user = {
            email: email,
            username: username,
            password: password
        }

        try {
        
            let euser = await axios.post('/signup', user)

            if(euser.data === "Change Email"){
                alert('Try different Email')
            } else {
                Nav('/login')
            }
            
            } catch (error) {
            alert('DataBase Not Available')
        }
    }

    return <>
    
    <div>
                <h3>
                    SIGNUP FORM
                </h3>
                <form onSubmit={signupHandler}>
                    <div className='form-control'>
                        <input type='text' maxLength='10' required={true} placeholder='Enter Username...' onChange={(e)=> setUsename(e.target.value)} value={username}/>
                        <br />
                        <input type='email' maxLength='30' required={true} placeholder='Enter Email...' onChange={(e)=> setEmail(e.target.value)} value={email}/>
                        <br />
                        <input type='password' maxLength='20' required={true} placeholder='Enter Password...' onChange={(e)=> setPassword(e.target.value)} value={password}/>
                    </div>
                    <button className='btn'> SIGNUP </button>
                </form>
            </div>
  </>
  
}