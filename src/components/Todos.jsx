import React from "react";
import Todo from "./Todo";

const Todos = ({ todos, onTodoDelete }) => {
    return (
        <div>
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} onTodoDelete={onTodoDelete} />
            ))}
        </div>
    );
};

export default Todos;
