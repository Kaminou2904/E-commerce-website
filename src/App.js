import './App.css';
import SideBar from './Components/SideBar';
import Main from './Components/Main';

function App() {
  return (
    <div className='super'>
        <SideBar/>
        {<Main/>}
    </div>
  );
}

export default App;
