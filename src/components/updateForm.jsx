import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBook
  } from '@fortawesome/free-solid-svg-icons'

const UpdateForm = ({ updateData, changeTask, updateTask, cancelUpdate   }) => {
    return(
        <>
        {/* //updateTask */}
        <br></br>
        <h2>TodoUpdate</h2>
        <br></br>
          <div className="row add-form">
          <div className="col ikon">
            <span><FontAwesomeIcon className="buku" icon={faBook} /></span>
          </div>
          <div className="col">
            <input 
            value={ updateData && updateData.title }
            onChange={ (e) => changeTask(e)}
            className="form-control form-control-lg"/>
          </div>
        </div>
        <div className="row">
            <button 
              className="btn btn-lg btn-update"
              onClick={updateTask}
              >
              update
            </button>
        </div>
        <div className="row">
          <button 
              onClick={cancelUpdate}
              className="btn btn-lg btn-cancel">
              Cancel
            </button>
        </div>
        <br/>
      </>
    )
}

export default UpdateForm;