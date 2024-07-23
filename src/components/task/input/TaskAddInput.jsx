import React from 'react'

export const TaskAddInput = ({inputText,setInputText,taskList,setTaskList}) => {
  const handleSubmit=(e)=>{
    if(inputText===""){
      return
    };
    e.preventDefault();
console.log(e);
//カードの追加
setTaskList([
  ...taskList,
  {
  text:inputText,
  id:taskList.length,
  draggableId:`task-${taskList.length}`,
  droppableId:`task-${taskList.length}`
},
]);
setInputText("");
};


  const handleChange=(e)=>{
setInputText(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="add a task" className='taskAddInput' onChange={handleChange} value={inputText}/>
      </form>
    </div>
  )
}
