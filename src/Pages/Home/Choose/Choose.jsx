import img1 from '../../../assets/login/logo.jpg'
import img2 from '../../../assets/login/logo.jpg'
import img3 from '../../../assets/login/logo.jpg'

const Choose = () => {
    return (
        <div className=" my-12">
            <h3 className=' text-4xl text-center my-4 text-orange-500 font-bold'>How Work It</h3>
            <p className=' text-xl text-center  w-[50%] mx-auto'>Red, sleek, and fast, the American-made Ford Mustang GT roars down the open road, a symbol of classic American muscle.</p>
            <div className="hero bg-blue-200 my-4 rounded-xl">
                <div className="hero-content flex-col lg:flex-row">
                    <div className=" lg:w-1/2 space-y-4 mr-12">
                        <h3 className=" font-bold">Why choose us</h3>
                        <h2 className=" text-6xl font-bold">best Valued deals you will ever find</h2>
                        <p>To find the best deals, it's essential to compare prices, read reviews, and make sure the product or service meets your needs and quality standards. Additionally, consider your budget and only buy what you actually need to ensure you're getting the best value for your money.</p>
                        <button class="btn btn-warning">Find Details</button>
                    </div>
                    <div className="lg:w-1/2 space-y-6">
                        <div className=' flex gap-4'>
                            <div>
                                <img src={img1} className='w-[100px]' alt="" />
                            </div>
                            <div>
                                <h2 className=' text-2xl font-bold'>Cross Country Drivers</h2>
                                <p className='my-2'>Cross country drivers embark on endless roads, chasing horizons with unwavering determination.</p>
                            </div>
                        </div>

                        <div className=' flex gap-4'>
                            <div>
                                <img src={img2} className='w-[100px]' alt="" />
                            </div>
                            <div>
                                <h2 className=' text-2xl font-bold'>All Inclusive Pricing</h2>
                                <p className='my-2'>Get everything you need in the confidence transparency price with our all inclusive pricing</p>
                            </div>
                        </div>

                        <div className=' flex gap-4'>
                            <div>
                                <img src={img3} className='w-[100px]' alt="" />
                            </div>
                            <div>
                                <h2 className=' text-2xl font-bold'>No Hidden Chargers</h2>
                                <p className='my-2'>We believe in providing straightforward pricing and clear, honest communication with our customers.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choose;