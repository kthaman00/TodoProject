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
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <h1 style={{textAlign:"center"}}>Create Todo List</h1>
      <h5 style={{textAlign:"center",marginBottom:30}}>You can also access TodoList button in NavBar to access list</h5>
      <div style={{borderRadius:30,padding:40,backgroundColor:"lightblue",borderWidth:2,borderColor:"lightgray",width:800,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} onSubmit={submitfn}>
        <div style={{width:700}} className="mb-3">
          <label style={{fontWeight:"700"}} htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            onChange={handlename}
            className="form-control"
            id="name"
          />
        </div>
        <div style={{width:700}} className="mb-3">
          <label style={{fontWeight:"700"}} htmlFor="Department" className="form-label">
            Department
          </label>
          <input
            type="text"
            onChange={handledepartment}
            className="form-control"
            id="Department"
          />
        </div>

        <div style={{width:700}} className="mb-3">
          <label style={{fontWeight:"700"}} htmlFor="Course" className="form-label">
            Course
          </label>
          <input
            type="text"
            onChange={handlecourse}
            className="form-control"
            id="Course"
          />
        </div>

        <div style={{width:700}} className="mb-3">
          <label style={{fontWeight:"700"}} htmlFor="Remarks" className="form-label">
            Remarks
          </label>
          <input
            type="text"
            onChange={handleremarks}
            className="form-control"
            id="Remarks"
          />
        </div>
        <div style={{ gap:10,width:1000,display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
        <button type="submit" className="btn btn-primary" onClick={submitfn}>
          Submit
        </button>
        <div style={{backgroundColor:"black" , width:120,padding:7,borderRadius:10,justifyContent:"center",alignItems:"center"}}>
        <Link style={{color:"white",textDecoration:"none"}} to="/list">
          Go to list View
        </Link>
        </div>
        </div>
      </div>
      
    </div>
  );
}

export default CreateItem;
