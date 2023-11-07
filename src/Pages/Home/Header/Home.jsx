import About from "../About/About";
import Banner from "../Banner/Banner";
import Choose from "../Choose/Choose";
import TabSection from "../TabSection/TabSection";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <TabSection></TabSection>
            <Choose></Choose>
        </div>
    );
};

export default Home;