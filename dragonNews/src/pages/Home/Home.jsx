import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h2 className="text-3xl font-poppins font-bold">This Is Home</h2>
        </div>
    );
};

export default Home;