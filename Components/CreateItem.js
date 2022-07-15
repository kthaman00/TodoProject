import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

function CreateItem() {
  const [alldata, setalldata] = useState([]);
  const [name, setname] = useState({});
  const [department, setdepartment] = useState({});
  const [course, setcourse] = useState({});
  const [remarks, setremarks] = useState({});

  const handlename = (event) => {
    setname(event.target.value);
  };
  const handledepartment = (event) => {
    setdepartment(event.target.value);
  };
  const handlecourse = (event) => {
    setcourse(event.target.value);
  };
  const handleremarks = (event) => {
    setremarks(event.target.value);
  };

  const submitfn = (e) => {
    e.preventDefault();

    axios
      .post("/create", {
        name,
        department,
        course,
        remarks,
      })
      .then((response) => {
        console.log(response);
      });
    // setalldata([...alldata,]);
    console.log(alldata);
  };

  return (
    <div>
      <form onSubmit={submitfn}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            onChange={handlename}
            className="form-control"
            id="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Department" className="form-label">
            Department
          </label>
          <input
            type="text"
            onChange={handledepartment}
            className="form-control"
            id="Department"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Course" className="form-label">
            Course
          </label>
          <input
            type="text"
            onChange={handlecourse}
            className="form-control"
            id="Course"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Remarks" className="form-label">
            Remarks
          </label>
          <input
            type="text"
            onChange={handleremarks}
            className="form-control"
            id="Remarks"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link color="white" to="/list">
          Go to list View
        </Link>
      </form>
      {/* <AppContext.Provider value={alldata}> 
 <TodoList/>
</AppContext.Provider> */}
    </div>
  );
}

export default CreateItem;
