import React, { useState } from 'react'

const TodoForm = (props) => {
    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };
    const handleDes = (e) => {
        setDes(e.target.value);
    };
    const passToDoToApp = () => {
        if (title) {
            props.addTodo({
                id: Date.now(),
                title,
                des,
                completed: false,
            });
            setTitle("");
            setDes("");
        }
    };
    return (
        <div>
            <div className="form-group mb-3">
                <label htmlFor="title" className="mb-3 text-danger">
                    Enter Your todo Name
                </label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    className="form-control"
                    onChange={handleTitle}
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="des" className="mb-3 text-danger">
                    Enter Your Description
                </label>
                <textarea
                    rows={5}
                    id="des"
                    value={des}
                    className="form-control"
                    onChange={handleDes}
                />
                <div className="d-flex justify-content-center">
                    <button
                        className="btn btn-danger mt-3 px-5 py-2"
                        onClick={passToDoToApp}
                    >
                        save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TodoForm
