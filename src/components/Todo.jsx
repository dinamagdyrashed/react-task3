import React from "react";
import { useNavigate } from "react-router-dom";

const Todo = ({ todo, onTodoDelete }) => {
    const navigate = useNavigate();

    return (
        <div className="alert alert-secondary d-flex justify-content-between align-content-center">
            <h4
                onClick={() => navigate(`/todo-details/${todo.id}`)}
                style={{ cursor: "pointer" }}
            >
                {todo.title}
            </h4>
            <i
                className="fa-solid fa-trash fs-4 text-danger"
                onClick={() => onTodoDelete(todo.id)}
            ></i>
        </div>
    );
};

export default Todo;
