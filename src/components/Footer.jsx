import React from 'react';


const customYear = new Date();
const year = customYear.getFullYear();

function Footer(){
return <p className="footer">© copyright | {year} | vinaykumar ❤</p>
}

export default Footer;