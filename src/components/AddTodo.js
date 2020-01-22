import React,{useState,useRef} from 'react'

export default function AddTodo({_addTodo}) {
    // let [fields,setFields] = useState({title: ''})
    let refName = useRef()

    let handleSubmit =(e)=>{
        e.preventDefault()
        let value = refName.current.value
        if(!value) return
        _addTodo(value)
        refName.current.value =''
    }

    // let handleChange =(e)=>{
    //     let {name,value} = e.target
    //     setFields({[name]:value})
    // }

    // let handleSubmit =(e)=>{
    //     e.preventDefault()
    //     if(!fields.title) return
    //     _handleAddTodo(fields.title)
    //     setFields({title: ''})
    // }

    return (
        <form onSubmit={handleSubmit}>
           <input type="text" ref={refName}/>
           <button>add</button>
        </form>
    )
}
