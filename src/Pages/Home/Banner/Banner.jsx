import img from '../../../assets/image/business-promotion.jpg'

const Banner = () => {
    return (
        <div>
            <img  data-aos="flip-up" className=' rounded-xl md:3/2 lg:w-full lg:h-[900px] ' src={img} alt="" />
        </div>
    );
};

export default Banner;