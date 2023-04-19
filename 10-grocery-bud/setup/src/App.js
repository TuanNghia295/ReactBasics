import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorages = () =>{
  const list = localStorage.getItem('list')
  if(list){
    return JSON.parse(list)
  }
  return []
}

function App() {
  const [name,setName] = useState('')
  const [list,setList] = useState(getLocalStorages())
  const [isEditing,setIsEditing] = useState(false);
  const [editID,setEditID] = useState(null)
  const [alert,setAlert] = useState({
    show:false,message:'',type:''
  })

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!name){
      // display alert
      showAlert(true,"PLease enter value","danger")
    }
    else if(name  && isEditing){
      {
        setList(
            list.map((item)=>{
              if(item.id === editID){
                return {...item,title:name}
              }
              return item
            })
          )
        }
        setIsEditing(false)
        setEditID(null)
        setName('')
    }
    else{
      //show alert
      const newItem = {
        id:new Date().getTime().toString(),
        title:name
      }
      showAlert(true,'item added to the list','success')
      setList([...list,newItem])
      setName('')
      showAlert(true,'item changed','success')
    }
  }

const showAlert = (show=false,message="",type="") => {
  setAlert({show,message,type})
}

const clearList = () => {
  showAlert(true,'List has been cleared','success')
  setList([])
}

const removeItem = (id) => {
  showAlert(true,'item removed','danger')
  setList(list.filter((item)=>item.id !== id))
}

const editItem= (id)=>{
  const specificItem = list.find((item)=>item.id === id)
  setIsEditing(true)
  setEditID(id)
  setName(specificItem.title)
}

useEffect(()=>{
  // Sử dụng JSON để chuyển đổi dữ liệu trong list
  //  từ mảng sang kiểu string
  localStorage.setItem("list",JSON.stringify(list))
},[list])
  return <section className='section-center'>
    <form className='grocery-form' onSubmit={handleSubmit}>
      {alert.show && <Alert {...alert} removeAlert={showAlert } list={list}/>}
      <h3>Grocery bud or to do list</h3>
      <div className='form-control'>
        <input type='text' 
          className='grocery' 
          placeholder='eggs' 
          value={name} 
          onChange={(e)=>setName(e.target.value)}
        >
        </input>
        <button type='submit' className='submit-btn'>
          {isEditing?'edit':'submit'}
        </button>
      </div>
    </form>
    {
      list.length>0 && (<div className='grocery-container'>
        <List items = {list} removeItem={removeItem} editItem={editItem}/>
        <button className='clear-btn'
          onClick={clearList}
        >
          clear
        </button>
    </div>)
    }
  </section>
}

export default App
