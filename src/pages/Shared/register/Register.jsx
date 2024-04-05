import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {

  const {createUser} = useContext(AuthContext)


  const handleRegister = (e)=>{
    e.preventDefault() 
    const form = new FormData(e.currentTarget)
    console.log(form.get('email'));

    const name = form.get('name')
    const photo = form.get('photo')
    const email = form.get('email')
    const password = form.get('password')

    console.log(name, photo , email, password);

    // creating user 
    createUser(email , password)
    .then(res =>{
       console.log(res.user)
       updateProfile(res.user,{
            displayName:name,
       })
       .then()
       .catch()
    })
    .catch(err => console.log(err))
  

 }
 return (
   <div>
     <Navbar></Navbar>
     <div className=" flex flex-col justify-center mx-auto gap-y-5">
       <h1  className=" text-3xl font-bold  text-center">Register</h1>
       <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2  mx-auto">
         <div className="form-control">
           <label className="label">
             <span className="label-text">Name</span>
           </label>
           <input type="text" placeholder="name" className="input input-bordered" name="name" required />
         </div>
         <div className="form-control">
           <label className="label">
             <span className="label-text">Photo URL</span>
           </label>
           <input type="text" placeholder="photo url" className="input input-bordered" name="photo" required />
         </div>
         <div className="form-control">
           <label className="label">
             <span className="label-text">Email</span>
           </label>
           <input type="email" placeholder="email" className="input input-bordered" name="email" required />
         </div>
         <div className="form-control">
           <label className="label">
             <span className="label-text">Password</span>
           </label>
           <input type="password" placeholder="password" className="input input-bordered" name="password" required />
          
         </div>
         <div className="form-control mt-6">
           <button className="btn btn-primary">Login</button>
         </div>
       </form>

       <p className=" text-center font-semibold hover:underline "> Have an Account <Link className=" text-blue-600 " to={'/login'}>LogIn</Link></p>
     </div>
   </div>
 );
};

export default Register;