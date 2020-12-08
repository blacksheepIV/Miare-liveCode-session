import React,{ useState, useEffect } from 'react'
import Modal from './Modal/Modal'


const Home = () =>{
    const [task,setTask] = useState('')
    const [taskList,setTaskList] = useState([])
    const [formattedTaskList, setFormattedTaskList] = useState(null)
    const [TaskStatus,setStatus] = useState('')
    //const [ShowTasks,setShowTask] = useState(false)
    const [showConfirmation, setConfirmation] = useState(false)

    function addTask(e){
      e.preventDefault()
      setTaskList(taskList => ([...taskList,task]) )
    }

    const removeTask = (task,id)=>()=>{
        setConfirmation(true)
        let clonedArray = [...taskList]
        clonedArray.splice(id,1)
        setTaskList(clonedArray)
    }

    useEffect(()=>{
        let formattedTaskList = taskList.map(
            (task,id)=>(
            <li key={id}>{task} <button onClick={removeTask(task,id)}>clearTask</button> </li>
            ))
        setFormattedTaskList(formattedTaskList)
        // switch(true){
        //     case taskList.length === 0:
        //         setStatus('All Tasks are done')
        //         //setShowTask(false)
        //         break
        //     case taskList.length === 1 || taskList.length === 2:
        //         setStatus(`Task(s) are being done`)
        //         //setShowTask(true)
        //         break
        //     case taskList.length>=3 && taskList.length<=5:
        //         setStatus(`${taskList.length}Tasks are being done`)
        //         break
        //     case taskList.length>11:
        //     setStatus(`Too many tasks at hand`)
        //         break
        // }
        if(taskList.length === 0)
          setStatus('All Tasks are done')
        else if(taskList.length === 1 || taskList.length === 2)
           setStatus(`Task(s) are being done`)
        else if(taskList.length>=3 && taskList.length<=5)
           setStatus(`${taskList.length}Tasks are being done`)
        else
          setStatus(`Too many tasks at hand`)
        
        
    },[taskList])
    return(
        <>
        {showConfirmation && <Modal/>}
        <form onSubmit={addTask}>
            <input type="text" value={task} name="task" onChange={e => setTask(e.target.value)}/>
            <button type="submit">Add Task</button>
        </form> 
       <h2>{TaskStatus}</h2>
        <ul>
        {formattedTaskList}
        </ul>
        </>
    )
}

export default Home