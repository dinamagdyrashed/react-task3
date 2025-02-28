import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
    const { todos } = props;
    console.log(todos);

    return (
        <div>
            {todos.map((todo, index) => {
                return <Todo key={index} todo={todo} />;
            })}
        </div>
    );
}

export default Todos
