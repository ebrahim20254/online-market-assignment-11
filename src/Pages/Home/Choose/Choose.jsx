import img1 from '../../../assets/login/logo.jpg'
import img2 from '../../../assets/login/company.jpg'
import img3 from '../../../assets/login/software.jpg'

const Choose = () => {
    return (
        <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500" className=" my-12 ">
            <h3 className=' text-4xl text-center my-4 text-orange-500 font-bold'>Whey Choose Us</h3>
            <p className=' text-xl text-center  w-[50%] mx-auto'>Work is where we weave the threads of effort into the fabric of success. It's not just a means to an end; it's the journey of purpose.</p>
            <div className="hero bg-blue-200 my-4 rounded-xl">
                <div className="hero-content flex-col lg:flex-row">
                    <div className=" lg:w-1/2 space-y-4 mr-12">
                        <h3 className=" font-bold text-orange-600">Why choose us</h3>
                        <h2 className=" text-6xl font-bold">Online Jobs Make People A Better Future.</h2>
                        <p>An online marketplace is an e-commerce site that connects sellers with buyers. It's often known as an electronic marketplace and all transactions are managed by the website owner. Companies use online marketplaces to reach customers who want to purchase their products and services.</p>
                        <button class="btn btn-warning">Good Job</button>
                    </div>
                    <div className="lg:w-1/2 space-y-6">
                        <div className=' flex gap-4'>
                            <div>
                                <img src={img1} className='w-[100px] rounded-full' alt="" />
                            </div>
                            <div>
                                <h2 className=' text-2xl font-bold'>Computers are the architects of the future</h2>
                                <p className='my-2'>he way technology is advancing, it's like computers are the architects, builders, and even the interior designers of the future.</p>
                            </div>
                        </div>

                        <div className=' flex gap-4'>
                            <div>
                                <img src={img2} className='w-[100px] rounded-full' alt="" />
                            </div>
                            <div>
                                <h2 className=' text-2xl font-bold'>Job in a good company</h2>
                                <p className='my-2'>That's a fantastic goal! What kind of job are you aiming for, and what steps have you taken so far to land a position in a good company</p>
                            </div>
                        </div>

                        <div className=' flex gap-4'>
                            <div>
                                <img src={img3} className='w-[100px] rounded-full' alt="" />
                            </div>
                            <div>
                                <h2 className=' text-2xl font-bold'>Online work is done through software</h2>
                                <p className='my-2'>Absolutely! Online work relies heavily on various types of software to facilitate different tasks.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choose;