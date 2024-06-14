import Button from "react-bootstrap/Button";
import { FaBook } from "react-icons/fa";

const AddTaskForm = ({ newTask, setNewTask, addTask, cancelAdd }) => {
  return (
    <>
      <br></br>
      <h2>TodoInput</h2>
      <br></br>
      {/* //addTask */}
      <div className="add-form">
        <FaBook size={"1.5rem"} className="buku" />
        <input
          value={newTask}
          placeholder="Input/Edit Todo"
          onChange={(e) => setNewTask(e.target.value)}
          className="form-control form-control-add"
        ></input>
      </div>
      <div className="flex">
        <Button
          onClick={addTask}
          className="btn-update"
          as="input"
          type="submit"
          value="Submit"
        />
        <button onClick={cancelAdd} className="btn-cancel">
          Cancel
        </button>
      </div>
      <br />
    </>
  );
};

export default AddTaskForm;
