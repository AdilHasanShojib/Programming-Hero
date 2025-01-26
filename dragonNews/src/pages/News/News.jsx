import { useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";

const News = () => {
    const {id}=useParams();
    return (
       
        <div>
           <Header></Header>
           <Navbar></Navbar>
           <div className="grid md:grid-cols-4">
           <div className="col-span-3">
            <h2 className="text-4xl">News Details</h2>
            
        </div>

        </div>
           
        </div>
        
    );
};

export default News;