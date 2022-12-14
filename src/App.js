import {useState} from 'react';
import AddTaskForm from './components/addTaskForm.jsx';
import UpdateForm from './components/updateForm.jsx';
import ToDo from './toDo.jsx';
import Done from './done.jsx';
import Uncomplete from './uncomplete.jsx'
// import ToDo from './components/toDo.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, Link, useNavigate} from 'react-router-dom'

import './App.css';

import data from './data.json'


function App() {
  const [toDo, setToDo] = useState(data);
  const [updateData, setUpdateData] = useState('');
  const [newTask, setNewTask] = useState('');
  const [searcH, setSearch] = useState('');
  const navigate = useNavigate()

  const addTask = (id) => {
    if(newTask){
      let num = toDo.length + 1;
      let newEntry = {id: num, title: newTask, status: false}
      setToDo([...toDo, newEntry])
      setNewTask('');
      navigate('/');
    }
  }

  const deleteTask = (id) =>{
    let newTask = toDo.filter(task => task.id !==id)
    setToDo(newTask);
  }

  const deleteAllTask = () =>{
    setToDo([]);
  }

  const deleteDoneTask = (id) =>{
    let newTask = toDo.filter(task => task.status !== true)
    setToDo(newTask);
  }

  const markDone = (id) =>{
    let newTask = toDo.map(task =>{
      if(task.id === id){
        return({ ...task, status: !task.status})
      }
      return task;
    })
    setToDo(newTask)
  }

  const cancelUpdate = () =>{
    setUpdateData('');
    navigate('/');
  }

  const changeTask = (e) =>{
    let newEntry = {
      id: updateData.id,
      title:  e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry);
  }

  const updateTask = () => {
    let filterRecords = [...toDo].filter(task=> task.id !== updateData.id)
    let updatedObject = [...filterRecords, updateData]
    setToDo(updatedObject);
    setUpdateData('');
    navigate('/');
  }

  const searchs = (search) => {
    if (search !== "") {
      searcH = toDo;
      setSearch = searcH.filter( todo => {
        const lc = todo.title.toLowerCase();
        const filter = search.toLowerCase();
        return lc.includes(filter);
      });
    } else {
     setSearch = toDo;
    }
    // this.setState({
    //   filtered: newList
    // });
    console.log(search);
  };

  return (
    <div className="container App">
      
      <Routes>
        <Route path='/' element={<ToDo
          toDo = {toDo}
          markDone = {markDone}
          setUpdateData = {setUpdateData}
          deleteTask = {deleteTask}
          deleteAllTask = {deleteAllTask}
          deleteDoneTask = {deleteDoneTask}
          searchs={searchs}
        />}/>

        <Route path='link-done' element={
        <Done
          toDo = {toDo}
          markDone = {markDone}
          setUpdateData = {setUpdateData}
          deleteTask = {deleteTask}
          deleteAllTask = {deleteAllTask}
          deleteDoneTask = {deleteDoneTask}
        />}/>

        <Route path='link-uncomplete' element={
        <Uncomplete
          toDo = {toDo}
          markDone = {markDone}
          setUpdateData = {setUpdateData}
          deleteTask = {deleteTask}
          deleteAllTask = {deleteAllTask}
          deleteDoneTask = {deleteDoneTask}
        />}/>

      {updateData && updateData ? (
        <Route path='/link-update' element={
        <UpdateForm
          updateData = {updateData}
          changeTask = {changeTask}
          updateTask = {updateTask}
          cancelUpdate = {cancelUpdate}
        />}/>
      ) : (
        <Route path='/link-add' element={
          <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
          />
        }/>
      )
    }
       
      </Routes>

    
      
    </div>
  );
}
export default App;
