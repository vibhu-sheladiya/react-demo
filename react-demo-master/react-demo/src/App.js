// import { Routes } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Card from './components/Card';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
setTimeout(() => {
  setAlert(null);
}, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("dark mode is  enable","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode is  enable","success");
    }
  }
  return (
    <>
      <Router>
<Navbar  mode={mode} toggleMode={toggleMode}/>

   <div className="container my-3">
   <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
            <Alert alert={alert}/>
  <row className="row" >
    
  <Card title="Movies" subtitles="Leo" desc="Parthiban is a mild mannered cafe owner in Kashmir, who fends off a gang of murderous thugs." />
  <Card title="Diwali" subtitles="Happy Moment" desc="
“Prayers for love and light to you and your family!” “From our family to yours, wishes for love, peace and prosperity!” May hope and happiness shine on you."/>
  <Card title="Merej" subtitles="Reenis vs Rima" desc="please welcome to my merej and blessing us to our next future.and having some keep foods and fastfoods to have eaten and you become healthier" />
  </row>
              <TextForm heading="App-Word Counter,Character Counter,Remove Extra spaces" mode={mode} showAlert={showAlert} />
            </Route>
          </Switch>
   </div>
   </Router>
    </>
  );
}

export default App;
