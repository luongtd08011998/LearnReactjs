import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import TodoImage from './assets/react.svg'
import { useState } from 'react'
import Header from './components/layout/header'
import Footer from './components/layout/footer'


const App = () => {
 const[todoList,setTodoList] = useState([]);

 const addNewData = (name)=>{
  setTodoList([...todoList, {id:Date.now(), name: name}]);
 } 

 const deleteValue = (id) => {    
    const newTodoList = todoList.filter(item => item.id !== id);
    setTodoList(newTodoList);
 }
  return (
   <>
    <Header/>
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addNewData={addNewData}/>
      {todoList.length>0 ? <TodoData todoList={todoList}
      deleteValue={deleteValue}/>   
      : 
      (<div className="todo-image">
        <img className='logo' src={TodoImage} alt="" />
      </div>
      )}
    </div>
    <Footer/>
   </>
  )
}

export default App
