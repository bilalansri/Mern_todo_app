import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../App.css'
import store from '../Redux/store'

export default ()=>{

    const logoutHandler = ()=>{
        store.dispatch({
            type: 'LOGOUT'
        })
    }

    let loguser = useSelector((abc)=>{
        return (abc.userReducer.loginuser || '')
      })

    return <>


    {
        loguser.email ? <Link to='/'>
        <button className="btn" onClick={logoutHandler}>LOGOUT</button>
    </Link> : <>
    <Link to='/login'>
        <button className="btn">LOGIN</button>
    </Link>

    <Link to='/signup'>
        <button className="btn">SIGNUP</button>       
    </Link>
    
    </>
    }


    
    
    </>
}
