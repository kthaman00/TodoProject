import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TodoContext from "../src/Context/todoContext";

function TodoList() {
  const { todoList, setTodoList, setidForUpdate } = useContext(TodoContext);

  useEffect(() => {
    getdata();
  }, []);

  function ondeletevalues(data) {
    console.log("hello");
    console.log(data);
    axios.delete(`/list/${data}`).then((response) => {
      alert("Data is sucessfully Deleted from database");
      console.log(response);
      getdata();
    });
  }

  function handleclick(data) {
    setidForUpdate(data);
  }

  function getdata() {
    axios.get("/lists").then((response) => {
      setTodoList(response.data.data);
    });
  }

  // console.log(database);

  return (
    <div>
      <h1>Here is the List of all the Todo List You have created</h1>
      <div style={{ borderWidth: 2, borderColor: " #000000" }}>
        {todoList.map((item) => {
          console.log(item);
          return (
            <div
              key={item._id}
              style={{
                display: "flex",
                flexDirection: "row",
                borderWidth: 1,
                borderColor: " #000000",
                padding: 20,
              }}
            >
              <h1 key={item._id}>{item.name}</h1>
              <button onClick={() => ondeletevalues(item._id)}>Delete</button>
              <Link
                onClick={() => handleclick(item._id)}
                to={`/edit/${item._id}`}
              >
                Edit
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TodoList;
