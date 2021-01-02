import React from 'react';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import 'tachyons';

class Introduction extends React.Component {
render                                                                     (){
return                                                                     (

<div className='containerA'>

<img 
src={img1}
className="boxA"
alt='National Energy Conservation Award' /> {/*Image of National Eng Consv Awd*/}

<div
style={{
display                                                                    :"flex",
flexDirection                                                              :"column"
}}
className="boxB vh-5 dt">

<ul>
<strong>
{`C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.`}
</strong>

<li
style={{
wordBreak                                                                  :"breakWord"
}}>
{`C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.`}
</li>
<li
style={{
wordBreak                                                                  :"breakWord"
}}>
{`C.R.I. is the highest contributor in the country for the projects of EESL(Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.`}	
</li>
</ul>

<span
className="dtc v-mid tc ">
<img 
src={img2}
className="f6 f2-m f-subheadline-l fw6 tc dim"
style={{
maxHeight                                                                  :"325px",
width                                                                      :"100%"
}}
id='gallery' 
alt='Gallery' /> {/*Image of gallery*/}

<p>
Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
</p>

</span>
</div>

</div>

);  //return ends here
}  //render ends here
}  //class ends here

export default Introduction;
