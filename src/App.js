import "./App.css";
import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import FormTodo from "./components/FormTodo";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("tasks");
    if (data) {
      setTasks(JSON.parse(data));
    }
  }, []);


  const handleAddItem = (task) => {
    setTasks([...tasks, task]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, task]));
  };


  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div
            className="card"
            id="list1"
            style={{ borderRadius: ".75rem", backgroundColor: "#eff1f2" }}
          >
            <div className="card-body py-4 px-4 px-md-5">
              <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                <i className="fas fa-check-square me-1"></i>
                Todolist
              </p>

              <FormTodo handleAddItem={handleAddItem} />
              <hr className="my-4" />

              <TaskList tasks={tasks} setTasks={setTasks} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
