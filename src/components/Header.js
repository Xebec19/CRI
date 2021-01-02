import React from 'react';
import logo from '../assets/logo.png';
import 'tachyons';

class Header extends React.Component {
render(){
return(

<div>

<article 
className="vh-5 dt w-100">
<div 
className="dtc v-mid tc white ph3 ph4-l">
<h1 
className="f6 f2-m f-subheadline-l fw6 tc">

<img 
src={logo} 
alt='C.R.I Fluid Systems' />  {/*Image to displayed as logo*/}


</h1>
</div>
</article>

</div>

);  //return ends here
}  //render ends here
}  //class ends here

export default Header;
