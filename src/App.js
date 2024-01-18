import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import DataList from "./components/DataList";
import AddDataForm from "./components/AddDataForm";
import UpdateDataForm from "./components/UpdateDataForm";
import DeleteDataButton from "./components/DeleteDataButton";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <h1>Teste 1</h1>;
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/add">Add Data</Link>
              </li>
              <li>
                <Link to="/update">Update Data</Link>
              </li>
              <li>
                <Link to="/delete">Delete Data</Link>
              </li>
            </ul>
          </nav>
          <hr />
          <Routes>
            <Route path="/" element={<DataList />} />
            <Route path="/add" element={<AddDataForm />} />
            <Route path="/update" element={<UpdateDataForm />} />
            <Route path="/delete" element={<DeleteDataButton />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
