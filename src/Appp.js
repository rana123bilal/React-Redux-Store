import { useState } from 'react';
import './App.css';

function App() {

const [InputValue, setInputValue] = useState('');
const [Todos, setTodos] = useState([]);
const [EditForm, setEditForm] = useState(false);
const [findTodo, setFindTodo] = useState();


  function inputTodoHandler(event){
    setInputValue(event.target.value)
  }

  function EditHandler(id){
    setEditForm(true);
    const foundTodo = Todos.find(item => item.id === id)
    setInputValue(foundTodo.name)
    setFindTodo(foundTodo)
    console.log(foundTodo)
  }

  function formTodoHandler(event){
    event.preventDefault();
    const newTodo = {name : InputValue, id: Math.floor(Math.random() * 10)}
    setTodos(prevState => {
      return [...prevState,newTodo]
  })
  setInputValue('')
    console.log(newTodo)
  }


  function deletehandler(id){
    const updatedList = Todos.filter(itm => itm.id !== id)
    setTodos(updatedList)
  }

  function formeditHandler(event){
    event.preventDefault()
    const updatedArr = [...Todos].map(item => {
      if(item.id === findTodo.id){
        item.name = InputValue
      }
      return item;
    })
    console.log(updatedArr)
    setTodos(updatedArr)
    setEditForm(false)
  }
  function inputeditHandler(event){
    setInputValue(event.target.value)
  }
  
  return (
    <div className="App">
      <h1>Todo App</h1>
      {EditForm && <form onSubmit={formeditHandler}>
        <input placeholder='Enter updated name' onChange={inputeditHandler} value={InputValue}/>
        <button type='submit'>Update</button>
      </form>}

      {!EditForm && <form onSubmit={formTodoHandler}>
        <input placeholder='Enter anything' onChange={inputTodoHandler} value={InputValue}/>
        <button type='submit'>Enter</button>
      </form>}
      <ul>
        {Todos && Todos.map((item) => {
          return (<li key={item.id}>{item.name}
          <button onClick={() => EditHandler(item.id)}>Edit</button>
          <button  onClick={() => deletehandler(item.id)}>Delete</button>
          </li>)
          
        })}
        </ul>
    </div>
  );
}

export default App;
