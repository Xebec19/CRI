import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Achievement from './components/Achievement';
import Accessories from './components/Accessories';
import Contacts from './components/Contacts';
import './App.css';


class App extends React.Component {
render(){
document.title='C.R.I Fluid Systems'
return(

<div className="App">

<Header />
<Introduction />
<Achievement />
<Accessories />
<Contacts />

</div>

);  //return ends here
}  //render ends here
}  //class ends here

export default App;
