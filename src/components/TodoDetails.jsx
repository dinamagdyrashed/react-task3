import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TodoDetails = () => {
    const [todo, setTodo] = useState(null);
    const params = useParams();

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos")) || [];
        const selectedTodo = todos.find((todo) => todo.id === Number(params.id));
        setTodo(selectedTodo || null);
    }, [params]);

    if (!todo) {
        return (
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <h3 className="text-center text-danger">Todo Not Found</h3>
            </div>
        );
    }

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow-lg p-4 w-50">
                <div className="card-body">
                    <h2 className="card-title text-center text-success fw-bold">
                        {todo.title}
                    </h2>
                    <hr />
                    <p className="card-text text-muted fs-5">{todo.description}</p>
                    <div className="text-center mt-4">
                        <span
                            className={`badge fs-6 p-2 ${todo.completed ? "bg-success" : "bg-warning"
                                }`}
                        >
                            {todo.completed ? "Completed" : "In Progress"}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoDetails;
