import { FaGoogle, FaGithub,FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qzone1 from "../../../assets/class.png";
import qzone2 from "../../../assets/playground.png";
import qzone3 from "../../../assets/swimming.png";
const RightSideNav = () => {
  return (
    <div>
        <div className="p-4 space-y-3 mb-6">
      <h2 className="text-2xl">Login With</h2>
      <button className="btn btn-outline w-full">
        <FaGoogle />
        Google
      </button>
      <button className="btn btn-outline w-full">
      <FaGithub />

        GitHub
      </button>
    </div>

    <div className="p-4 space-y-3 mb-6">
      <h2 className="text-2xl">Find Us On</h2>
      <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
        <FaFacebook className="mr-3" />
        <span>Facebook</span>
      </a>
      <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
        <FaTwitter className="mr-3" />
        <span>Twitter</span>
      </a>
      <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
        <FaInstagram className="mr-3" />
        <span>Instragram</span>
      </a>
    </div>

    <div className="p-4 space-y-3 mb-6">
      <h2 className="text-2xl">Q Zone</h2>
      <img src={qzone1} alt="" />
      <img src={qzone2} alt="" />
      <img src={qzone3} alt="" />
      
    </div>








    </div>
    
 





  );
};

export default RightSideNav;
