import About from "../About/About";
import Banner from "../Banner/Banner";
import Choose from "../Choose/Choose";
import Faq from "../Faq/Faq";
import TabSection from "../TabSection/TabSection";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <TabSection></TabSection>
            <Choose></Choose>
            <Faq></Faq>
        </div>
    );
};

export default Home;