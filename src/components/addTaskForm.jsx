import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBook
  } from '@fortawesome/free-solid-svg-icons'
  import {Routes, Route, Link, useNavigate} from 'react-router-dom'


const AddTaskForm = ({  newTask, setNewTask, addTask  }) => {
    return(
        <> 
        <br></br>
        <h2>TodoInput</h2>
        <br></br>
          {/* //addTask */}
          <div className="col">
            <div className="row add-form">
                <div className="col ikon">
                    <span><FontAwesomeIcon className="buku" icon={faBook} /></span>
                </div>
                <div className="col">
                    <input 
                    value={newTask}
                    placeholder="Input/Edit Todo"
                    onChange={(e) => setNewTask(e.target.value)}
                    className="form-control form-control-lg form-control-add">
                    </input>
                </div>
            </div>
          </div>
            <div className="col-auto">
              <Button onClick={addTask} className="tombol-submit" as="input" type="submit" value="Submit" />
            </div>
          <br/>
        </>
    )
}

export default AddTaskForm;