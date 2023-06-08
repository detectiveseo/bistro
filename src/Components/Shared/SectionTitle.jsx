import React from 'react';

const SectionTitle = ({subtitle, heading}) => {
    return (
        <div className='w-10/12 lg:w-5/12 mx-auto my-10 text-center flex flex-col justify-center gap-3'>
            <h4>--{subtitle}--</h4>
            <hr />
            <h2 className='text-2xl lg:text-5xl'>{heading}</h2>
            <hr />
        </div>
    );
};

export default SectionTitle;