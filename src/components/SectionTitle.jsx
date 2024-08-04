import React from 'react';

const SectionTitle = ({heading,subHeading,titleHeading}) => {
    return (
 <div>
           <div className='flex items-center gap-2.5 mt-[140px]'>
            <div className='w-5 h-10 bg-[#DB4444] rounded'>
            {heading}
            </div>
            <h3 className='leading-5 font-semibold text-base text-[#DB4444]'>{subHeading}</h3>
          
        </div>
        <h2 className="text-[36px] leading-[48px]">{titleHeading}</h2>
 </div>
    );
};

export default SectionTitle;