import { FaBook } from "react-icons/fa";
const UpdateForm = ({ updateData, changeTask, updateTask, cancelUpdate }) => {
  return (
    <>
      {/* //updateTask */}
      <h2>Todo Update</h2>
      <br></br>
      <div className="add-form">
        <FaBook size={'1.5rem'} className="buku"/>
        <input
          value={updateData && updateData.title}
          onChange={(e) => changeTask(e)}
          className="form-control"
        />
      </div>
      <div className="flex">
        <button className="btn-update" onClick={updateTask}>
          update
        </button>
        <button onClick={cancelUpdate} className="btn-cancel">
          Cancel
        </button>
      </div>
      <br />
    </>
  );
};

export default UpdateForm;
