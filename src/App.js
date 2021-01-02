import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import './App.css';

class App extends React.Component {
render(){
document.title='C.R.I Fluid Systems'
return(

<div>

<Header />
<Introduction />

</div>

);  //return ends here
}  //render ends here
}  //class ends here

export default App;
