/* eslint-disable @typescript-eslint/no-explicit-any */
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
        <div className={twMerge(' text-white py-12 font-manrope p-4', className)}>
            <h1 className='text-[30px] md:text-[48px] font-medium  mb-4 '>{title} <span className='text-[#1FFFA5]'>{middleText}</span> {lastTest}</h1>
            <p className='text-[13px] md:text-[16px] '>{description}</p>
        </div>
    );
};

export default CustomTitle;