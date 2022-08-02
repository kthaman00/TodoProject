import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import TodoContext from "../src/Context/todoContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <h2>Here is the List of all the Todo List You have created</h2>
      <h4>For now you can only edit name! :)</h4>
      <br></br>
      <br></br>
      <div style={{ borderWidth: 2, borderColor: " #000000" }}>
        {todoList.map((item) => {
          console.log(item);
          return (
            
            <div style={{marginBottom:30}}>
               <Card style={{width:700}}>
      <Card.Header style={{backgroundColor:"lightblue"}} as="h5">Details of {item.name}</Card.Header>
      <Card.Body>
        
        <Card.Text><h6>Name: {item.name}</h6>
        
        </Card.Text>
        <Card.Text>
        <h6>Course: {item.course}</h6>
        </Card.Text>
        <Card.Text>
        <h6>Department: {item.department}</h6>
        </Card.Text>
        <Card.Text>
        <h6>Remarks: {item.remarks}</h6>
        </Card.Text>
          <div style={{ gap:10,width:200,display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
        <Button onClick={() => ondeletevalues(item._id)} variant="primary">DELETE</Button>
        <div style={{backgroundColor:"black" , width:90,padding:7,borderRadius:10,justifyContent:"center",alignItems:"center"}}>
        <Link color="white"
        style={{color:"white",textDecoration:"none",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center"}}
                      onClick={() => handleclick(item._id)}
                      to={`/edit/${item._id}`}
                    >
                      Edit
                    </Link>
                    </div>
                    </div>
      </Card.Body>
    </Card>
                
                    
                    
                    
                  </div>
               
              
            
          );
        })}
      </div>
    </div>
  );
}

export default TodoList;
