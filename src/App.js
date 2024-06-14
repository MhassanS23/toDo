import { useEffect, useState } from "react";
import AddTaskForm from "./pages/addTaskForm.jsx";
import UpdateForm from "./pages/updateForm.jsx";
import ToDo from "./pages/toDo.jsx";
import Done from "./pages/done.jsx";
import Uncomplete from "./pages/uncomplete.jsx";
// import ToDo from './components/toDo.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import "./App.css";

// import data from "./data.json";

function App() {
  const data = localStorage.getItem("arr")
    ? JSON.parse(localStorage.getItem("arr"))
    : [];
  let [toDo, setToDo] = useState(data);
  const [updateData, setUpdateData] = useState("");
  const [newTask, setNewTask] = useState("");
  const [searcH, setSearch] = useState("");
  // const [filter, setFilter] = useState("all");
  const navigate = useNavigate();

  // filter
  // switch (filter) {
  //   case "done":
  //     data = data.filter((task) => task.status === true);
  //     break;

  //   case "uncomplete":
  //     data = data.filter((task) => task.status === false);
  //     break;

  //   default:
  //     break;
  // }

  // const filterAll = () => {
  //   setFilter("all");
  // };
  // const filterDone = () => {
  //   setFilter("done");
  // };
  // const filterUncomplete = () => {
  //   setFilter("uncomplete");
  // };

  const addTask = () => {
    if (newTask) {
      const ranId = uuidv4();
      let newEntry = { id: ranId, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
      navigate("/");
    }
  };

  const deleteTask = (id) => {
    let newTask = toDo.filter((task) => task.id !== id);
    setToDo(newTask);
  };

  const deleteAllTask = () => {
    setToDo([]);
  };

  const deleteDoneTask = (id) => {
    let newTask = toDo.filter((task) => task.status !== true);
    setToDo(newTask);
  };

  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };

  const cancelUpdate = () => {
    setUpdateData("");
    navigate("/");
  };

  const cancelAdd = () => {
    navigate("/");
  };

  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  const updateTask = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    setToDo(updatedObject);
    setUpdateData("");
    navigate("/");
  };

  const handleChange = (e) => {
    const datasearch = e.target.value;
    setSearch(datasearch);
  };

  useEffect(() => {
    localStorage.setItem("arr", JSON.stringify(toDo));
  }, [toDo]);

  return (
    <div className="container App">
      <Routes>
        <Route
          path="/"
          element={
            <ToDo
              toDo={toDo}
              searcH={searcH}
              handleChange={handleChange}
              markDone={markDone}
              setSearch={setSearch}
              setUpdateData={setUpdateData}
              deleteTask={deleteTask}
              deleteAllTask={deleteAllTask}
              deleteDoneTask={deleteDoneTask}
            />
          }
        />

        <Route
          path="/link-done"
          element={
            <Done
              toDo={toDo}
              searcH={searcH}
              handleChange={handleChange}
              markDone={markDone}
              setUpdateData={setUpdateData}
              deleteTask={deleteTask}
              deleteAllTask={deleteAllTask}
              deleteDoneTask={deleteDoneTask}
            />
          }
        />

        <Route
          path="/link-uncomplete"
          element={
            <Uncomplete
              toDo={toDo}
              searcH={searcH}
              handleChange={handleChange}
              markDone={markDone}
              setUpdateData={setUpdateData}
              deleteTask={deleteTask}
              deleteAllTask={deleteAllTask}
              deleteDoneTask={deleteDoneTask}
            />
          }
        />

        {updateData && updateData ? (
          <Route
            path="/link-update"
            element={
              <UpdateForm
                updateData={updateData}
                changeTask={changeTask}
                updateTask={updateTask}
                cancelUpdate={cancelUpdate}
              />
            }
          />
        ) : (
          <Route
            path="/link-add"
            element={
              <AddTaskForm
                newTask={newTask}
                setNewTask={setNewTask}
                addTask={addTask}
                cancelAdd={cancelAdd}
              />
            }
          />
        )}
      </Routes>
    </div>
  );
}
export default App;
