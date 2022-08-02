import axios from "axios";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function EditItem(props) {
  const [name, setname] = useState({ name: "" });

  function updatedata() {
    axios
      .put(`/edit/${props.idForUpdate}`, name)
      .then((response) => {
        console.log(response);
        alert(`Value has changed to ${response.data.name}`)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handlename = (event) => {
    setname({ name: event.target.value });
  };

  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <h1>For now you can only edit name ! :)</h1>
      <h5>If you want to go back click TodoList in NavBar to see the Updation !!</h5>
      <br />
      <br />
      
      
    <div style={{width:700,marginBottom:20}} className="mb-3">
      <label style={{fontWeight:"700"}} htmlFor="name" className="form-label">
        Name
      </label>
      <input
        type="text"
        onChange={handlename}
        className="form-control"
        id="name"
      />
      <div style={{marginTop:20,display:"flex",justifyContent:"center",alignItems:"center"}} >
      <button style={{padding:10,width:100,backgroundColor:"black",color:"white",textDecoration:"none",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:30}} onClick={updatedata}>Update</button>
      </div>
    </div>
    </div>
  );
}

export default EditItem;
