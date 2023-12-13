

const Faq = () => {
    return (
        <div data-aos="flip-up" className=" w-[80%] mx-auto ">
            <h2 className=" text-4xl text-center font-bold text-red-400">Frequently asked questions</h2>
            <div className=" space-y-6  ">
                <div className="collapse collapse-arrow bg-blue-200 my-6">
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                       1. How do you ask for a job online?
                    </div>
                    <div className="collapse-content">
                        <p>searching the company's website or LinkedIn profile to find an appropriate contact.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-blue-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                       2. What work should I do online?
                    </div>
                    <div className="collapse-content">
                        <p>Online Tutor. If you're doing well in college, it's easy to think everyone else is too, but the truth is that many people struggle with passing their courses. </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-blue-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                       3. Why working online is the best?
                    </div>
                    <div className="collapse-content">
                        <p> Remote work makes it easier to achieve a healthy work-life balance since employees can often tailor their schedules around their personal commitments</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-blue-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                       4.hat is the most in demand job online?
                    </div>
                    <div className="collapse-content">
                        <p>Here are the ten types of online jobs that will offer not only great opportunities for remote work but also long-term career growth.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-blue-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                       5. What percent of work is done online?
                    </div>
                    <div className="collapse-content">
                        <p>he share of all work performed at home rose from 4.7 percent in January 2019 to 61 percent in May 2020.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;