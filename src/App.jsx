
import TodoForm from './components/TodoForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import Todos from './components/Todos';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
    // todos.push(todo);
  };
  // const deleteTodo = (id) => {
  //   todos = todos.filter((todo) => todo.id !== id);
  // };
  return (
    <>
      <div className='d-flex justify-content-center align-items-center flex-column'>
        <div className='p-5 mt-5 border w-75'>
          <h3 className='text-center fw-bold text-success'>TODO APP</h3>
          <TodoForm addTodo={addTodo} />
          {todos.length > 0 ? (
            <>
              <Todos todos={todos} />
            </>
          ) : null}

        </div>
      </div>
    </>
  )
}

export default App
