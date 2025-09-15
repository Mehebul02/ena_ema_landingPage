

import React from 'react';
import { twMerge } from 'tailwind-merge';
interface CustomTitleProps {
    title: string
    middleText?: string
    lastTest?: string
    description?: string
    className?: string   
}
const CustomTitle: React.FC<CustomTitleProps> = ({
    title,
    middleText,
    lastTest,
    description,
    className,
}) => {
    return (
        <div className={twMerge('flex flex-col text-white py-12 font-manrope p-4 ', className)}>
            <h1 className='text-[30px] md:text-[48px] font-medium  mb-4 mt-8'>{title} <span className='text-[#1FFFA5]'>{middleText}</span> {lastTest}</h1>
            <p className='text-[13px] md:text-[16px] '>{description}</p>
        </div>
    );
};

export default CustomTitle;