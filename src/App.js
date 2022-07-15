import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import TodoList from "../Components/TodoList";
import EditItem from "../Components/EditItem";
import CreateItem from "../Components/CreateItem";
import TodoContext from "./Context/todoContext";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [idForUpdate, setidForUpdate] = useState();

  return (
    <BrowserRouter>
      <TodoContext.Provider
        value={{
          todoList,
          setTodoList,
          setidForUpdate,
        }}
      >
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/create" className="navbar-brand">
              Create List
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/list" className="nav-link">
                    TodoList
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <Routes>
          <Route path="/create" element={<CreateItem />} />
          <Route
            path={`/edit/${idForUpdate}`}
            element={<EditItem idForUpdate={idForUpdate} />}
          />
          <Route path="/list" element={<TodoList />} />
        </Routes>
      </TodoContext.Provider>
    </BrowserRouter>
  );
}

export default App;
