import React from 'react';
import { MdCall } from "@react-icons/all-files/md/MdCall";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaGlobe } from "@react-icons/all-files/fa/FaGlobe";
import 'tachyons';

const Contact =                                         () => {
return                                                  (
<div 
id='contacts' 
>

<span >
<MdCall 
size="2em"
/>
{` Toll free 1800 200 1234`}
</span>

<span>
<FaFacebook 
size="2em"/>
{` www.facebook.com/cripumps`}
</span>

<span>
<FaGlobe 
size="2em" />
{` www.cripumps.com`}
</span>
</div>
);
}
export default Contact;