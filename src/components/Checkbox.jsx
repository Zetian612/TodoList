import React, { Fragment } from "react";

const Checkbox = (props) => {
  const {
    data: { id, title, completed, date },
    onChange,
  } = props;


  return (  
    <Fragment>
      <ul className="list-group list-group-horizontal rounded-0 bg-transparent">
        <li className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
          <div className="form-check">
            <input
              className="form-check-input me-0"
              type="checkbox"
              onChange={onChange}
              name={id}
              aria-label="..."
              defaultChecked={completed}
            />
          </div>
        </li>
        <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
          <p className="lead fw-normal mb-0">{ completed ? <del>{title}</del> : title }</p>
        </li>
        <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
          <div className="d-flex flex-row justify-content-end mb-1">
            {/* <a
              href="#!"
              className="text-info"
              data-mdb-toggle="tooltip"
              title="Edit todo"
            >
              <i className="fas fa-pencil-alt me-3" />
            </a> */}
            {/* <a
              href="#!"
              className="text-danger"
              title="Delete todo"
            >
              <i className="bi bi-trash"></i>
            </a> */}
          </div>
          <div className="text-end text-muted">
            <a
              href="#!"
              className="text-muted"
              data-mdb-toggle="tooltip"
              title="Created date"
            >
              <p className="small mb-0">
                <i className="fas fa-info-circle me-2" />
                {date} 
              </p>
            </a>
          </div>
        </li>
      </ul>
    </Fragment>
  );
};

export default Checkbox;
