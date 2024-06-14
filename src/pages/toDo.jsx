import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquare,
  faPen,
  faTrashCan,
  faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const ToDo = ({
  toDo,
  searcH,
  handleChange,
  setSearch,
  markDone,
  setUpdateData,
  deleteTask,
  deleteAllTask,
  deleteDoneTask,
}) => {
  const navigate = useNavigate();
  const clickDone = () => {
    setSearch('');
    navigate("/link-done");
  };
  const clickHandler = () => {
    navigate("/link-add");
  };
  const clickHome = () => {
    setSearch('');
    navigate("/");
  };
  const clickUncomplete = () => {
    setSearch('');
    navigate("/link-uncomplete");
  };
  
  return (
    <>
      <h2 className="mt-4">Todo Search</h2>

      <div className="container-search">
        <div className="flex-search">
          <FaSearch size={"1.5rem"} className="cari" />
          <input
            onChange={handleChange}
            placeholder="Search"
            className="form-control form-control-search"
          />
        </div>

        <div className="container-button-search">
          <Button
            className="tombol-add"
            as="input"
            type="submit"
            value="Search"
          />
          <Button
            onClick={clickHandler}
            className="tombol-add"
            as="input"
            type="submit"
            value="Add new Task"
          />
        </div>
      </div>

      {/* {displaytodo} */}
      <h2 className="mt-4">Todo List</h2>

      <div className="container-button">
        <Button
          onClick={clickHome}
          className="tombol-todo"
          as="input"
          type="submit"
          value="All"
        />
        <Button
          onClick={clickDone}
          className="tombol-todo"
          as="input"
          type="submit"
          value="Done"
        />
        <Button
          onClick={clickUncomplete}
          className="tombol-todo"
          as="input"
          type="submit"
          value="Todo"
        />
      </div>

      {toDo && toDo.length ? "" : "No Task...."}
      {toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .filter((item)=>{
            return searcH.toLowerCase() === '' ? item : item.title.toLowerCase().includes(searcH.toLowerCase())
          })
          .map((task) => {
            return (
              <React.Fragment key={task.id}>
                <div className="col taskBg">
                  <div className={task.status ? "done" : ""}>
                    <span className="taskText">{task.title}</span>
                  </div>

                  <div className="iconsWrap">
                    {task.status ? (
                      <span
                        title="Completed / Not Completed"
                        onClick={(e) => markDone(task.id)}
                      >
                        <FontAwesomeIcon className="cek" icon={faCheckSquare} />
                      </span>
                    ) : (
                      <span
                        title="Completed / Not Completed"
                        onClick={(e) => markDone(task.id)}
                      >
                        <FontAwesomeIcon className="cek2" icon={faSquare} />
                      </span>
                    )}

                    <span
                      className="pulpen"
                      title="Edit"
                      onClick={() => {
                        navigate("/link-update");
                        setUpdateData({
                          id: task.id,
                          title: task.title,
                          status: task.status ? true : false,
                        });
                      }}
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                    <span
                      className="sampah"
                      title="Delete"
                      onClick={() => deleteTask(task.id)}
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}

      <div className="container-button2">
        <Button
          onClick={() => deleteDoneTask(toDo.status)}
          className="tombol-todo2"
          as="input"
          type="submit"
          value="Delete Done Task"
        />
        <Button
          onClick={deleteAllTask}
          className="tombol-todo2"
          as="input"
          type="submit"
          value="Delete All Task"
        />
      </div>
    </>
  );
};

export default ToDo;
