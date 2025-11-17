import React from 'react';
import logo1 from '../../src/assets/logo.png';

const Logo = () => {
    return (
        <div className='flex items-end'>
            <img src={logo1} alt="Logo" />
            <h3 className=' text-3xl font-bold'>Zapshift</h3>
        </div>
    );
};

export default Logo;
