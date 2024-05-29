import React from 'react';


const Footer =()=>
{


    const year = new Date().getFullYear();
    return <>
    <footer className="ft">
        <p className='ft' >copyright Ⓒ {year}</p> 
    </footer></>;
}
export default Footer;