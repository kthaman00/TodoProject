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
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handlename = (event) => {
    setname({ name: event.target.value });
  };

  return (
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
      <button onClick={updatedata}>Update</button>
    </div>
  );
}

export default EditItem;
