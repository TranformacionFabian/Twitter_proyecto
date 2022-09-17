import React from 'react'
import GlobalStyles from './styles/GlobalStyles';
import Home from './components/Home'
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';


function App() {
  
    return ( 
      <div className="App">
    <Sidebar/>


    <Home/>
    

    <Widgets/>
 

 <GlobalStyles/>
    </div>
  );
}

export default App;
