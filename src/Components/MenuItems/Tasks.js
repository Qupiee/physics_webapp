import React from "react";
import "./Tasks.css";
import TasksTabs from "../Functional/TasksTabs";

function Tasks() {
    return(
        <div>
            <h1 className="label-tasks" style={{display: "flex", alignItems: "center", justifyContent: "center", margin: 20}}>Задания</h1>
            <TasksTabs />
        </div>
    )
}

export default Tasks;
