import React, { useEffect, useState } from "react";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";
import FiltrationTabs from "../components/FiltrationTabs";

const Home = () => {
    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem("todos")) || []
    );
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState("all");

    const addNewTodo = (todo) => {
        const allTodos = [...todos, todo];
        setTodos(allTodos);
    };

    const deleteTodo = (id) => {
        const filteredTodos = todos.filter((todo) => todo.id !== id);
        setTodos(filteredTodos);
    };

    useEffect(() => {
        if (selectedFilter === "all") {
            setFilteredTodos(todos);
        } else if (selectedFilter === "inProgress") {
            const allTodos = todos.filter((todo) => !todo.completed);
            setFilteredTodos(allTodos);
        } else if (selectedFilter === "completed") {
            const allTodos = todos.filter((todo) => todo.completed);
            setFilteredTodos(allTodos);
        }
    }, [selectedFilter, todos]);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="px-5 py-4 mt-5 w-75">
                <h3 className="text-uppercase text-center fw-bold text-success">
                    Todo App
                </h3>
                <TodoForm onAddTodo={addNewTodo} />
                {todos.length > 0 && (
                    <>
                        <div className="dropdown-divider my-4" />
                        <FiltrationTabs
                            selectedFilter={selectedFilter}
                            setSelectedFilter={setSelectedFilter}
                        />
                        <Todos todos={filteredTodos} onTodoDelete={deleteTodo} />
                    </>
                )}
            </div>
        </div>
    );
};

export default Home;
