import { useEffect, useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import Layout from "./components/Layout";
import NoMatch from "./components/NoMatch";
import User from "./components/User";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getTodosSelector } from "./store/todo/selectors";
import { fetchTodoRequest } from "./store/todo/actions";

export interface User {
  id: string;
  fullName: string;
}

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todos = useSelector(getTodosSelector);
  // const pending = useSelector(getPendingSelector);
  // const error = useSelector(getErrorSelector);

  const usersArr: User[] = [
    { id: "1", fullName: "Robin Wieruch" },
    { id: "2", fullName: "Sarah Finnley" },
  ];

  useEffect(() => {
    dispatch(fetchTodoRequest());
  }, []);

  const [users, setUsers] = useState(usersArr);

  const handleRemoveUser = (userId: string) => {
    setUsers((state) => state.filter((user) => user.id !== userId));
    navigate("/users");
  };

  return (
    <>
      <h1>React Router</h1>

      {todos &&
        todos.map((todo, index) => {
          return (
            <div style={{ color: "white" }} key={index}>
              {todo.title}
            </div>
          );
        })}

      <Navigation />

      <Routes>
        <Route element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="users" element={<Users users={users} />}>
            <Route
              path=":userId"
              element={<User onRemoveUser={handleRemoveUser} />}
            />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
