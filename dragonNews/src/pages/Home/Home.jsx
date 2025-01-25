import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import Navbar from "../shared/Navbar/Navbar";
import BreakingNews from "./BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCards from "./NewsCards";


const Home = () => {
    const  news = useLoaderData();
    console.log(news);

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
         
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div ><LeftSideNav></LeftSideNav></div>
                <div className="md:col-span-2">
                    {
                        news.map(anews =>
                            <NewsCards key={anews._id} news={anews}></NewsCards>
                        )
                    }
                </div>
                <div ><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;