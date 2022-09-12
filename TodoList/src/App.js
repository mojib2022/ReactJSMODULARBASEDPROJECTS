import React, { useState } from 'react'
import './css/app.css'

//Start of the App Function Component
function App() {

  //Declaring Variables using useState Hook
  const [taskname,settaskname] = useState('')
  const [tasklist,settasklist] = useState([])
  //End of Declaring variables


 //Add Tasks Function
  function addTask()
  {
     settasklist([...tasklist,taskname]);
  }
 //End of Add Tasks Function


  
  //Creating then Task list view using the Map Function
  const tasklistconent = tasklist.map((task,index)=>{
    return(
    <div className='center'>
      <p>{task}</p>
      <i className='fa fa-trash-o' onClick={()=>deleteTask(index)}></i>
    </div>
    )
});


 
//Delete Tasks Function
function deleteTask(index){
  var dupArray = [...tasklist];
  dupArray.splice(index,1)
  settasklist(dupArray)
}  
//End of Delete task Function


  return (
    <div className="App">
     <div className="container center">
        <div className="todolist-wrapper center">
            <h2>To Do List</h2>
            <div className="form">
                <input type="text" className="txt" value={taskname} onChange={(e)=>{settaskname(e.target.value)}}/>
                <button className="btn" onClick={addTask}>Add</button>
            </div>
            <div className="items">
            {tasklistconent}
            </div>
        </div>
        </div>
    </div>
  );
}
//End of the App Function Component

export default App;
