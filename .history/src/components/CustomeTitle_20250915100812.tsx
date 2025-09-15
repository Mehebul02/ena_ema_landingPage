/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

const CustomTitle = ({title,middleText ,lastTest,description}:any) => {
    return (
       <div
      className={twMerge(
        'text-white py-12 font-manrope p-4',
        isDark ? 'bg-black' : 'bg-gray-100',
        isDark && 'border border-gray-700'
      )}
    >
            <h1 className='text-[30px] md:text-[48px] font-medium  mb-4 '>{title} <span className='text-[#1FFFA5]'>{middleText}</span> {lastTest}</h1>
            <p className='text-[13px] md:text-[16px] '>{description}</p>
        </div>
    );
};

export default CustomTitle;