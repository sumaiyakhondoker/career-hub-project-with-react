import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";


const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <div className="max-w-7xl mx-auto">
            <Categories></Categories>
            <FeaturedJobs></FeaturedJobs>
            </div>
            
        </div>
    );
};

export default Home;