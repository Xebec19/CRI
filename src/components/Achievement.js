import React from 'react';
import img from '../assets/3.png'
import 'tachyons';

class Achievement extends React.Component {
render(){
return(

<div>

<article 
className="vh-5 dt w-100 bb b--dark-red">
<div 
className="dtc v-mid tc black ph3 ph4-l">
<p className="f4 fw6 pt5 hover-gray">
INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
</p>
<img 
src={img} 
alt='C.R.I Fluid Systems' />  {/*Image to displayed as logo*/}
<p className="fw4">
{`Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors`}
</p>
</div>
<hr className='b--dark-red' />
</article>

</div>

);  //return ends here
}  //render ends here
}  //class ends here

export default Achievement;
