import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faCircleCheck, faPen, faTrashCan, faSearch
} from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import {Routes, Route, Link, useNavigate} from 'react-router-dom'

const ToDo = ({toDo, markDone, setUpdateData, deleteTask, deleteAllTask}) => {
  const navigate = useNavigate()
  const clickUpdate = (e) =>{
    navigate('/link-update');
  };
  const clickHandler = () =>{
    navigate('/link-add')
  };
    return(
    <>
    <br></br>
      <h2>TodoSearch</h2>
      <br></br>
    
    <div className="container-search">
        <div className="col">
          <div className="row search-form">
                <div className="col ">
                    <span><FontAwesomeIcon className="cari" icon={faSearch} /></span>
                </div>
                <div className="col">
                    <input
                    placeholder="Search"
                    className="form-control form-control-lg form-control-search"
                    />
                </div>
          </div>

          <div className="row">
              <div className="col">
                <Button className="tombol-search" as="input" type="submit" value="Search" />
              </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
          </div>
          <div className="row">
            <Button 
            onClick={clickHandler}
            className="tombol-add" 
            as="input" 
            type="submit" 
            value="Add new Task" />
          </div>
        </div>
    </div>
    <br></br>

     {/* {displaytodo} */}
     <h2>TodoList</h2>

    <div className="container-button">
      <Button className="tombol-todo" as="input" type="submit" value="All" />
      <Button className="tombol-todo" as="input" type="submit" value="Done" />
      <Button className="tombol-todo" as="input" type="submit" value="Todo" />
    </div>

    {toDo && toDo.length ? '' : 'No Task....'}
        {toDo && toDo
            .sort((a,b) => a.id > b.id ? 1 : -1)
            .map((task, index)=>{
              return(
                <React.Fragment key={task.id}>
                    <div className="col taskBg">
                      <div className={task.status ? 'done':''}>
                    <span className="taskText">{ task.title }</span>
                    </div>
      
                    <div className="iconsWrap">
                      <span className="cek" title="Completed / Not Completed" onClick={(e)=> markDone(task.id)}>
                        <FontAwesomeIcon icon={faCircleCheck}/>
                      </span>
      
                      {task.status ? null :(
                        <span className="pulpen" title="Edit" onClick={()=> {setUpdateData({
                            id: task.id,
                            title: task.title,
                            status: task.status ? true : false
                          });
                        } }
                        >
                          <FontAwesomeIcon icon={faPen}/>
                        </span>                    
                      )}
                      <span
                        className="sampah"
                        title="Delete"
                        onClick={() => deleteTask(task.id)}
                        >
                      <FontAwesomeIcon icon={faTrashCan}/>
                      </span>
                    </div>
                    </div>
                </React.Fragment>
              )
            })
        }
        <div className="container-button2">
        <Button onClick={deleteAllTask} className="tombol-todo2" as="input" type="submit" value="Delete Done Task" />
        <Button onClick={deleteAllTask} className="tombol-todo2" as="input" type="submit" value="Delete All Task" />
        </div>
    </>
    )
}

export default ToDo;