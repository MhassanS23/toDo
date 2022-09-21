
const UpdateForm = ({ updateData, changeTask, updateTask, cancelUpdate   }) => {
    return(
        <>
        {/* //updateTask */}
        <br></br>
        <h2>TodoUpdate</h2>
        <br></br>
          <div className="row">
          <div className="col">
            <input 
            value={ updateData && updateData.title }
            onChange={ (e) => changeTask(e)}
            className="form-control form-control-lg"/>
          </div>
          <div className="col-auto">
            <button 
              className="btn btn-lg btn-success mr-20"
              onClick={updateTask}
              >
              update
            </button>
            <button 
              onClick={cancelUpdate}
              className="btn btn-lg btn-warning">
              Cancel
            </button>
          </div>
        </div>
        <br/>
      </>
    )
}

export default UpdateForm;