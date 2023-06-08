import SectionTitle from '../../../Shared/SectionTitle';
import feturedImg from '../../../../assets/home/featured.jpg';
import './Feature.css'

const Feature = () => {
    return (
        <div className=' text-white w-full h-[700px] flex flex-col justify-center items-center my-10 featureImg'>
            <SectionTitle heading="CHEF RECOMMENDS" subtitle="Should Try"/>
            <div className='w-6/12 mx-auto flex justify-center items-center gap-20'>
                <div>
                    <img src={feturedImg} alt="" />
                    </div>
                <div>
                    <p>March 20, 2023</p>
                    <h6>WHERE CAN I GET SOME?</h6>
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum quidem rerum, similique voluptates maiores enim! Quos earum saepe blanditiis deserunt commodi, et quia fuga dolorem. Suscipit veniam odit pariatur nesciunt!</p>
                    <button>REEAD MORE</button>
                </div>

            </div>

            
        </div>
    );
};

export default Feature;