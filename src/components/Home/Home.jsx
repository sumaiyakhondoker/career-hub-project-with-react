import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Categories2 from "../Categories/Categories2";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";


const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <div className="max-w-7xl mx-auto">
            <Categories></Categories>
            <FeaturedJobs></FeaturedJobs>
            <Categories2></Categories2>
            </div>
            
        </div>
    );
};

export default Home;