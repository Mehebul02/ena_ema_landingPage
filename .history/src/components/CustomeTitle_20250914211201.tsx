import React from 'react';

const CustomTitle = ({title,mi ,description}) => {
    return (
        <div className='bg-[#151E1B] text-white py-12 font-manrope'>
            <h1 className='text-[30px] md:text-[48px] font-medium text-center mb-4 '>Why Businesses <span className='text-[#1FFFA5]'>Trust Us</span> With Their Designs</h1>
            <p className='text-[13px] md:text-[16px] text-center'>We combine proven conversion frameworks with agency-level design to deliver results that matter.</p>
        </div>
    );
};

export default CustomTitle;