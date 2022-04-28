import axios from "axios"


const getList = (list)=>({
    type : 'GET_LIST',
    payload : list
})


const deleteRow = ()=>({
    type : 'DEL_ROW'
})


const addRow = ()=>({
    type : 'ADD_ROW'
})


const editRow = ()=>({
    type : 'EDIT_ROW'
})


export const loadList = ()=>{

    const logid = localStorage.getItem('token')

    return function (dispatch){
        axios.post('/get-todo', {logid})
            .then((res)=>{
                dispatch(getList(res.data))
            })
            .catch((err)=>console.log(err))
    }
}


export const deleteToDo = (_id)=>{
    return function (dispatch){
        axios
            .post('/delete-todo', {_id})
            .then((res)=>{
                dispatch(deleteRow())
                dispatch(loadList())
            })
            .catch((err)=>console.log(err))
    }

}


export const addupdate = (text, update, setText, setUpdate, loguser)=>{

    const logid = loguser._id
    console.log('addlogied',logid);

    return function (dispatch){
        if(update == ''){
            axios
                .post('/save-todo', {text, logid})
                .then((res)=>{
                    dispatch(addRow())
                    dispatch(loadList())
                    setText('')
                })
                .catch((err)=>console.log(err))


        } else {
            axios
                .put('/update-todo', {_id:update, text})
                .then((res)=>{
                    dispatch(editRow())
                    dispatch(loadList())
                    setText('')
                    setUpdate('')
                })
                .catch((err)=>console.log(err))

        }
    }
}

export const editToDo = (_id, text, setText, setUpdate)=>{
    setUpdate(_id)
    setText(text)

}

