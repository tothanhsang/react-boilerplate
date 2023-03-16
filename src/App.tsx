import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import Layout from "./components/Layout";
import NoMatch from "./components/NoMatch";
import User from "./components/User";
import { connect } from "react-redux";
import { startAction } from "./actions/startAction";
import { stopAction } from "./actions/stopAction";

export interface User {
  id: String;
  fullName: String;
}

function App() {
  // const [count, setCount] = useState(0)

  // return (
  //   <div className="App">
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src="/vite.svg" className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://reactjs.org" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </div>
  // )

  const navigate = useNavigate();

  const usersArr: User[] = [
    { id: "1", fullName: "Robin Wieruch" },
    { id: "2", fullName: "Sarah Finnley" },
  ];

  const [users, setUsers] = useState(usersArr);

  const handleRemoveUser = (userId: String) => {
    setUsers((state) => state.filter((user) => user.id !== userId));
    navigate("/users");
  };

  return (
    <>
      <h1>React Router</h1>

      <Navigation />

      <Routes>
        <Route element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="users" element={<Users users={users} />}>
            <Route
              path=":userId" element={<User onRemoveUser={handleRemoveUser} />}
            />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

// const mapStateToProps = (state: any) => ({
//   ...state,
// });

// const mapDispatchToProps = (dispatch: any) => ({
//   startAction: () => dispatch(startAction),
//   stopAction: () => dispatch(stopAction),
// });

export default App;
