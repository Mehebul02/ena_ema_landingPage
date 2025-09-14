import React from 'react';

const CustomTitle = ({title,middleText ,description}) => {
    return (
        <div className='bg-[#151E1B] text-white py-12 font-manrope'>
            <h1 className='text-[30px] md:text-[48px] font-medium text-center mb-4 '>{title} <span className='text-[#1FFFA5]'>{middleText}</span> </h1>
            <p className='text-[13px] md:text-[16px] text-center'>We combine proven conversion frameworks with agency-level design to deliver results that matter.</p>
        </div>
    );
};

export default CustomTitle;