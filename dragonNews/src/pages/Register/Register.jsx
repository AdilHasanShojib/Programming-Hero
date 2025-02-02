import { Link, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";


const Register = () => {

 const {createUser,updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate();



    const handleRegister = e =>{

        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        createUser(email,password)
        .then(res =>{
          updateUserProfile({ displayName: name, photoURL: photo}).then(
            ()=> {
              navigate("/");
            }
          ).catch(err=>{
            console.log(err);
          })
        })
        .catch(err =>{
          console.log(err);
        })


    }
    return (
        <div>
               <Navbar></Navbar>
            <div>
            <h2 className="text-3xl my-10 text-center">Please Register!</h2>
            <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" placeholder="photo url" name="photo" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center mt-3">Already have an account?<Link className="text-blue-600 font-bold" to='/login'>Login</Link></p>
            </div>

        </div>
    );
};

export default Register;