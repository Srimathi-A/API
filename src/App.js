import './App.css';
import { Route,Routes } from 'react-router-dom';
//import RestControllerGet from './RestControllerGet';
//import RestController from './RestController';
//import RestControllerPut from './RestControllerPut';
import RestControllerDelete from './RestControllerDelete';
import Todo from './TableSearch';
{/*import Home from './Webpage/Home';
import User from './Webpage/User';
import Post from './Webpage/Post';

function App() {
  return (
    <div>
      <h1>Fetch Api Example</h1>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/user" element={<User/>}/>
      <Route path="/path" element={<Post/>}/>
    </Routes>
    </div>
  );
}*/}

function App(){
  return(
    <div>
     {/* <RestControllerGet/>
      <RestController/>
  <RestControllerPut/>*/}
      <Todo/>
      <RestControllerDelete/>
      </div>
  );
}


export default App;