import './App.css';
import Home from './Screens/ToDo';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './Redux/store';
import LogIn from './Screens/LogIn';
import SignUp from './Screens/SignUp';
import Main from './Screens/Main';
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
      store.dispatch({
        type: "USER_LOGIN",
        payload: {email:1}
        })
    }
  }, [])


  return <div className='app'>

    <Provider store={store}>

      <BrowserRouter>
        <Main />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<LogIn />}/>
          <Route path='/signup' element={<SignUp />}/>
        </Routes>
      
      </BrowserRouter>

    </Provider> 

    </div>
}

export default App;

