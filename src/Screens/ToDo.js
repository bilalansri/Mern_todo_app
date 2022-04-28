import '../App.css'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {addupdate, editToDo, deleteToDo, loadList} from '../Redux/actions/TodoActions'
import { useDispatch } from 'react-redux'


export default ()=>{

    const [update, setUpdate] = useState('')
    const [text, setText] = useState('')

    const nav = useNavigate()
    const dispatch = useDispatch()

    const { list } = useSelector(state=>state.listReducer)

    const loguser = useSelector(abc=>abc.userReducer.loginuser || '')

    useEffect(()=>{
        
        dispatch(loadList())

    }, [])

    if(!loguser.email){
        nav('/login')
    }

        
    const formHandler = (e)=>{

        e.preventDefault()
        dispatch (addupdate(text, update, setText, setUpdate, loguser)) 
    }


        
        return <>
        <h2>
            TODO-LIST with Mern/Redux
        </h2>


        <div>
            <h3>
                {update ? 'UPDATE DATA' : 'ADD DATA'}
            </h3>
            <form onSubmit={formHandler}>
                <div className='form-control'>
                    <input type='text' placeholder='Enter Text...' onChange={(e)=> setText(e.target.value)} value={text}/>
                </div>
                <button className='btn'> {update ? 'UPDATE DATA' : 'ADD DATA'}</button>
            </form>
        </div>


        <div>

        <h3>HISTORY</h3>
            <ul className="list">
            {
                list && list.map((item)=>{

                return <li key={item._id}>
                    {item.text} <button className='edit-btn' onClick={()=> dispatch (editToDo(item._id, item.text, setText, setUpdate)) }> Edit </button>
                    <button className='delete-btn' onClick={()=> dispatch (deleteToDo(item._id)) }> X </button>
                </li>
                })
            }
            </ul>
        </div>
    </>
}