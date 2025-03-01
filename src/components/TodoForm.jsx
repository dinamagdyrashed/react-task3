import React, { useState } from "react";

const TodoForm = ({ onAddTodo }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = () => {
        if (title.trim()) {
            const newTodo = {
                id: Date.now(),
                title,
                description,
                completed: false,
            };
            onAddTodo(newTodo);
            setTitle("");
            setDescription("");
        }
    };

    return (
        <div>
            <div className="form-group mb-3">
                <label htmlFor="title" className="mb-3 text-danger">
                    Enter Your Todo Name
                </label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    className="form-control"
                    onChange={(event) => setTitle(event.target.value)}
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="des" className="mb-3 text-danger">
                    Enter Your Description
                </label>
                <textarea
                    rows={5}
                    id="des"
                    value={description}
                    className="form-control"
                    onChange={(event) => setDescription(event.target.value)}
                />
            </div>
            <div className="d-flex justify-content-center">
                <button className="btn btn-danger mt-3 px-5 py-2" onClick={handleSubmit}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default TodoForm;
