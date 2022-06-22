import { useState } from "react";

const FormTodo = (props) => {
  const [title, setTitle] = useState("");
  const { handleAddItem } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem({
      id: (+new Date()).toString(),
      title,
      completed: false,
      date: new Date().toLocaleDateString(
        "es-US",
        {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
      ),
    });
    setTitle("");
  };
  return (
    <>
      <div className="pb-2">
        <div className="d-flex flex-row align-items-center">
          <form onSubmit={handleSubmit} className="row g-2">
            <div className="col-auto">
              <input
                className="form-control"
                type="text"
                value={title}
                placeholder="Add a task"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <button
                className="btn btn-primary"
                disabled={title ? "" : "disabled"}
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormTodo;
