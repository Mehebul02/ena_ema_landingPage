import CustomTitle from "../CustomeTitle";

const RealCustomer = () => {
    return (
        <div className="bg-[#151E1B] py-8 px-4 font-manrope">
           <CustomTitle titleClass="text-6xl" className="flex justify-center w-full mx-auto text-center" title="Real Customer" middleText="Trust Us"  description="We combine proven conversion frameworks with agency-level design to deliver results that matter."/> 
       <div className='flex flex-col text-white py-12 font-manrope p-4 '>
            <h1 className=' text-3xl md:text-5xl font-medium  mb-4 mt-8'> <span className='text-[#1FFFA5]'>{middleText}</span> {lastTest}</h1>
            <p className='text-[13px] md:text-[16px] '></p>
        </div>
       
        </div>
    );
};

export default RealCustomer;