import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Career Hub | Home</title>
            </Helmet>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
            <h2>This Is Home</h2>
        </div>
    );
};

export default Home;