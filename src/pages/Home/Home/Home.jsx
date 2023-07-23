import Banner from "../Banner/Banner";
import Gelarry from "./Gelarry/Gelarry";
import PopularCollage from "./PopularCollage/PopularCollage";
import ResearchPaper from "./ResearchPaper/ResearchPaper";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularCollage></PopularCollage>
            <Gelarry></Gelarry>
            <ResearchPaper></ResearchPaper>
        </div>
    );
};

export default Home;