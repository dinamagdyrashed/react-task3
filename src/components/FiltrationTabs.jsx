import React from "react";

const FiltrationTabs = ({ selectedFilter, setSelectedFilter }) => {
    return (
        <div className="btn-group mb-4 w-100">
            <button
                className={`btn btn-secondary ${selectedFilter === "all" ? "active" : ""}`}
                onClick={() => setSelectedFilter("all")}
            >
                All
            </button>
            <button
                className={`btn btn-secondary ${selectedFilter === "inProgress" ? "active" : ""}`}
                onClick={() => setSelectedFilter("inProgress")}
            >
                In Progress
            </button>
            <button
                className={`btn btn-secondary ${selectedFilter === "completed" ? "active" : ""}`}
                onClick={() => setSelectedFilter("completed")}
            >
                Completed
            </button>
        </div>
    );
};

export default FiltrationTabs;
