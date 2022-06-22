import React from "react";
import Checkbox from "./Checkbox";

const TaskList = (props) => {
  const { tasks, setTasks } = props;

  const onChangeStatus = e => {
    const { name, checked } = e.target;

    const updateList = tasks.map(item => ({
      ...item,
      completed: item.id === name ? checked : item.completed
    }));
    setTasks(updateList);
    localStorage.setItem("tasks", JSON.stringify(updateList));
  };

  const onClickRemoveItemSelected = e => {
    const updateList = tasks.filter(item => !item.completed);
    setTasks(updateList);
    localStorage.setItem("tasks", JSON.stringify(updateList));
  };

  const chk = tasks.map(item => (
    <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
  ));

  return (
    <>
     {tasks.length ? (
        <p className="">
          <button className="btn btn-danger" onClick={onClickRemoveItemSelected}>
            Delete all completed
          </button>
        </p>
      ) : null}
      {tasks.length ? chk : "No tasks yet :("} 
     
      </>
  );
};

export default TaskList;
