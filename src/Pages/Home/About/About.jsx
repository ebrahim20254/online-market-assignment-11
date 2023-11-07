import img1 from '../../../assets/image/job-career.jpg'


const About = () => {
  return (
    <div className="mx-auto my-12">
      <h2 className=' text-4xl text-center my-4 text-orange-500 font-bold'>About Us</h2>
      <p className=' text-xl text-center  w-[50%] mx-auto'>Looking for a job that matches my skills and passions. Experienced, dedicated, and eager to contribute to a dynamic team</p>
      <div className="hero my-6">
        <div className="hero-content flex-col lg:flex-row gap-8">
          <div className=' lg:w-1/2 relative'>
            <img src={img1} className="w-full rounded-lg shadow-2xl" />
            {/* <img src={img1} className="w-1/2 absolute right-5 top-1/2 rounded-lg border-6 border-white shadow-2xl" /> */}
          </div>
          <div className=' lg:w-1/2 space-y-6'>
            <h1 className="text-6xl font-bold">Find a job that suit with your <span className=' text-orange-600'>passion</span></h1>
            <p>
              Looking for a flexible online job? Explore a wide range of opportunities from remote customer service roles to freelance writing gigs. Work from the comfort of your home and enjoy the convenience of setting your own schedule. Find your ideal online job today and start earning from anywhere!</p>
            <button className="btn btn-warning ml-8">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;