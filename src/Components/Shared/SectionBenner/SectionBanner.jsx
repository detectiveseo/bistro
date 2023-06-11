import { Parallax, Background } from 'react-parallax';


const SectionBanner = ({backgroundImage, heading, subtitle}) => {
    return (
        <Parallax
        blur={{ min: -10, max: 10 }}
        bgImage={backgroundImage}
        bgImageAlt="the dog"
        strength={-500}
    >
       <div className='w-full h-[60vh] flex flex-col justify-center items-center'>
            <div className='p-5 bg-black bg-opacity-60 w-7/12 h-3/6 text-center flex flex-col justify-center items-center gap-5 text-white'>
                <h1 className='text-7xl font-bold uppercase'>{heading}</h1>
                <p className='text-2xl'>{subtitle}</p>
            </div>
        </div>
    </Parallax>
    );
};

export default SectionBanner;